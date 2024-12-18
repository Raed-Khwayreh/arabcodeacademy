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
const AITools = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageNum = parseInt(searchParams.get("page") || "1", 10);
  const [loading, setLoading] = useState<boolean>(false);
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
    fetchAIToolsData(pageNum, pageSize.current)
      .then((result) => {
        setPageNationState((prev) => {
          return {
            ...prev,
            data: result.data,
            totalPages: result.total_pages,
          };
        });
      })
      .finally(() => {
        {
          setLoading(false);
        }
      });
  }, [pageNum, searchParams]);

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
      ) : (
        <AIToolsList data={pageNationState.data} />
      )}
      <ProgressPagination
        listStartEnd={pageNationState.listStartEnd}
        currentPage={pageNationState.currentPage}
        pageNotFound={pageNationState.pageNotFound}
        totalPages={pageNationState.totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default AITools;
