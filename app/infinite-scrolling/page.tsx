"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ACALoading from "@/components/ui/ACALoading";
import { useInView } from "react-intersection-observer";
import styles from "./InfiniteScrolling.module.css";
import ACAError from "@/components/ui/ACAError";
import { ErrorMessage } from "@/types/ErrorMessage";
import { SearchBar } from "@/components/ui";
import FavoriteButton from "../ai-tools/FavoriteButton/FavoriteButton";
import AIToolsList from "./AIToolsList/AIToolsList";
import { fetchItems } from "./utils/fetchAItools";

const InfiniteScrolling = () => {
  const [isFavoritePressed, setIsFavoritePressed] = useState(false);
  const [searchValue, setSearhValue] = useState("");

  const handleOnPressFavorite = () => {
    setIsFavoritePressed((prev) => !prev);
  };

  const handleOnSearch = (searchText: string) => {
    setSearhValue(searchText);
  };

  const {
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isFetching,
    isLoading,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ["ai-tools"],
    queryFn: ({ pageParam = 1 }) =>
      fetchItems({ pageParam, search: searchValue, isFav: isFavoritePressed }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    refetch();
  }, [searchValue, refetch, isFavoritePressed]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (error) return <ACAError errorMessage={ErrorMessage.CONNECTION_FAILD} />;

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <SearchBar
          isDisabled={isFetching}
          placeholder="....chatgpt"
          handleOnSearch={handleOnSearch}
        />
        <FavoriteButton
          isDisabled={isFetching}
          handleOnPressFavorite={handleOnPressFavorite}
          isFavoritePressed={isFavoritePressed}
        />
      </div>
      {isLoading || isRefetching ? (
        <div className={styles["page-loading-container"]}>
          <ACALoading />
        </div>
      ) : (
        <>
          {data?.pages.map((page, i) => (
            <AIToolsList key={i} data={page.data} />
          ))}
          <div ref={ref}>
            {isFetchingNextPage && (
              <div className={styles["loading-container"]}>
                <ACALoading />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InfiniteScrolling;
