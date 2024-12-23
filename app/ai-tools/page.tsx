"use client";

import React, { useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./AITools.module.css";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import { generateNumbersList } from "./utils/generateNumbersList";
import { getPageSize } from "./utils/getPageSize";
import { SearchBar } from "@/components/ui";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import AIToolsList from "./AIToolsList/AIToolsList";
import ProgressPagination from "./ProgressPagination/ProgressPagination";
import { AIToolsCardProps } from "@/types/AIToolCardProps";
import useSWR, { mutate } from "swr";
import { ErrorMessage } from "@/types/ErrorMessage";

const fetchAIToolsData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

const AITools = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageNum = parseInt(searchParams.get("page") || "1", 10);
  const [isFavoritePressed, setIsFavoritePressed] = useState<boolean>(
    searchParams.get("isFav") === "true"
  );
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );
  const pageSize = useRef(getPageSize());

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/aitools?page_size=${
    pageSize.current
  }&page=${pageNum}${
    isFavoritePressed ? `&isFav=${isFavoritePressed}` : ""
  }&search=${searchValue}`;

  const { data, error, isLoading } = useSWR(apiUrl, fetchAIToolsData);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && data?.total_pages && newPage <= data.total_pages) {
      router.push(
        `/ai-tools?page=${newPage}${
          isFavoritePressed ? `&isFav=${isFavoritePressed}` : ""
        }${searchValue ? `&search=${searchValue}` : ""}`
      );
    }
  };

  const handleOnPressFavorite = () => {
    setIsFavoritePressed((prev) => !prev);
    router.push(
      `/ai-tools?isFav=${!isFavoritePressed}${
        searchValue ? `&search=${searchValue}` : ""
      }`
    );
  };

  const handleOnSearch = (searchText: string) => {
    router.push(
      `/ai-tools${searchText ? `?search=${searchText}` : ""}${
        isFavoritePressed ? `&isFav=${isFavoritePressed}` : ""
      }`
    );
    setSearchValue(searchText);
  };

  //TODO: Will replaced when there is authorized user, and will filtered depending on user favorites
  const handleOnPressFavoriteCard = (toolId: number) => {
    //Timeout Used to make fadeout anmation
    setTimeout(
      () => {
        if (data) {
          const updatedData = {
            ...data,
            data: data.data.map((tool: AIToolsCardProps) =>
              tool.tool_id === toolId ? { ...tool, isFav: !tool.isFav } : tool
            ),
          };
          const filteredData = isFavoritePressed
            ? {
                ...updatedData,
                data: updatedData.data.filter(
                  (tool: AIToolsCardProps) => tool.isFav
                ),
              }
            : updatedData;
          mutate(apiUrl, filteredData, false);
        }
      },
      isFavoritePressed ? 500 : 0
    );
  };

  if (error)
    return (
      <div className={styles["error-container"]}>
        <ACAError errorMessage={ErrorMessage.CONNECTION_FAILD} />
      </div>
    );

  const pageNotFound = pageNum > data?.total_pages;

  return (
    <>
      <div className={styles["search-container"]}>
        <SearchBar
          isDisabled={isLoading}
          placeholder="....chatgpt"
          handleOnSearch={handleOnSearch}
        />
        {!error && (
          <FavoriteButton
            isDisabled={isLoading}
            handleOnPressFavorite={handleOnPressFavorite}
            isFavoritePressed={isFavoritePressed}
          />
        )}
      </div>
      {pageNotFound ? (
        <div className={styles["page-not-found"]}>
          <ACAError errorMessage={ErrorMessage.NO_RESULTS} />
        </div>
      ) : isLoading ? (
        <div className={styles["loading-container"]}>
          <ACALoading />
        </div>
      ) : (
        <>
          <AIToolsList
            isFavoritesPressed={isFavoritePressed}
            data={data?.data}
            handleOnPressFavoriteCard={handleOnPressFavoriteCard}
          />
          <ProgressPagination
            listStartEnd={generateNumbersList(pageNum)}
            currentPage={pageNum}
            pageNotFound={pageNotFound}
            totalPages={data?.total_pages}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

const AIToolsPage = () => {
  return (
    <Suspense
      fallback={
        <div className={styles["loading-container"]}>
          <ACALoading />
        </div>
      }
    >
      <AITools />
    </Suspense>
  );
};

export default AIToolsPage;
