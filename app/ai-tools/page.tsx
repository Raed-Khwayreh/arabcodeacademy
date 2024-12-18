"use client";
import ACALoading from "@/components/ui/ACALoading";
import { AIToolCardProps } from "@/components/ui/AIToolCard/AIToolCard";

import React, { useEffect, useRef, useState } from "react";
import AIToolsList from "./AIToolsList/AIToolsList";
import { useRouter, useSearchParams } from "next/navigation";
import { generateNumbersList } from "./utils/generateNumbersList";
import { getPageSize } from "./utils/getPageSize";
import styles from "./AITools.module.css";
import ACAError from "@/components/ui/ACAError";
import ProgressPagination from "./ProgressPagination/ProgressPagination";
import { fetchAIToolsData } from "./utils/fetchAIToolsData";
import { SearchBar } from "@/components/ui";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

const AITools = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageNum = parseInt(searchParams.get("page") || "1", 10);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isFavoritePressed, setIsFavoritePressed] = useState(false);
  const [pageNationState, setPageNationState] = useState({
    data: [] as AIToolCardProps[],
    currentPage: parseInt(searchParams.get("page") || "1", 10),
    totalPages: 0,
    pageNotFound: false,
    listStartEnd: generateNumbersList(pageNum),
  });
  const pageSize = useRef(0);

  useEffect(() => {
    setLoading(true);
    fetchAIToolsData(pageNum, pageSize.current, isFavoritePressed)
      .then((result) => {
        setPageNationState((prev) => {
          return {
            ...prev,
            data: result.data,
            totalPages: result.total_pages,
          };
        });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        {
          setLoading(false);
        }
      });
  }, [pageNum, searchParams, isFavoritePressed]);

  useEffect(() => {
    pageSize.current = getPageSize();
    setPageNationState((prev) => {
      return {
        ...prev,
        listStartEnd: generateNumbersList(pageNum),
        pageNotFound: pageNum > pageNationState.totalPages,
        currentPage: pageNum,
      };
    });
  }, [pageNationState.totalPages, pageNum]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pageNationState.totalPages) {
      router.push(`/ai-tools?page=${newPage}`);
    }
  };

  const handleOnPressFavorite = () => {
    setIsFavoritePressed((value) => !value);
  };

  return (
    <>
      {loading ? (
        <div className={styles["loading-container"]}>
          <ACALoading />
        </div>
      ) : pageNationState.pageNotFound ? (
        <div className={styles["page-not-found"]}>
          <ACAError />
        </div>
      ) : !error ? (
        <>
          <div className={styles["search-container"]}>
            <SearchBar placeholder="....chatgpt" />
            <FavoriteButton
              handleOnPressFavorite={handleOnPressFavorite}
              isFavoritePressed={isFavoritePressed}
            />
          </div>
          <AIToolsList data={pageNationState.data} />
          <ProgressPagination
            listStartEnd={pageNationState.listStartEnd}
            currentPage={pageNationState.currentPage}
            pageNotFound={pageNationState.pageNotFound}
            totalPages={pageNationState.totalPages}
            handlePageChange={handlePageChange}
          />
        </>
      ) : (
        <ACAError />
      )}
    </>
  );
};

export default AITools;
