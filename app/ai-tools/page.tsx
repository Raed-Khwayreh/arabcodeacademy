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
import { FilledArrow } from "@/public/icons";
const AITools = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageNum = parseInt(searchParams.get("page") || "1", 10);
  const [pageNationState, setPageNationState] = useState({
    data: [] as AIToolCardProps[],
    currentPage: parseInt(searchParams.get("page") || "1", 10),
    totalPages: 0,
    loading: true,
    activeButton: parseInt(searchParams.get("page") || "1", 10) - 1,
    pageNotFound: false,
    startEnd: generateNumbersList(pageNum),
  });
  const pageSize = useRef(0);

  const fetchData = async (page: number) => {
    setPageNationState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const response = await fetch(
        `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page_size=${pageSize.current}&page=${page}`
      );
      const result = await response.json();
      setPageNationState((prev) => {
        return {
          ...prev,
          data: result.data,
          totalPages: result.total_pages,
        };
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setPageNationState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
    }
  };

  useEffect(() => {
    pageSize.current = getPageSize();
    setPageNationState((prev) => {
      return {
        ...prev,
        startEnd: generateNumbersList(pageNum),
        activeButton: pageNum - 1,
        pageNotFound: pageNum > pageNationState.totalPages,
        currentPage: page,
      };
    });
    const page = pageNum;
    fetchData(page);
  }, [pageNum, searchParams, pageNationState.totalPages]);

  const handlePageChange = (newPage: number): void => {
    if (newPage >= 1 && newPage <= pageNationState.totalPages) {
      router.push(`/ai-tools?page=${newPage}`); // Update URL for App Router
    }
  };

  return (
    <>
      {pageNationState.loading ? (
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
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            cursor:
              pageNationState.activeButton + 1 === 1 ? "default" : "pointer",
          }}
          onClick={() => {
            if (pageNationState.activeButton + 1 !== 1) {
              setPageNationState((prev) => {
                return {
                  ...prev,
                  startEnd: generateNumbersList(pageNum),
                  activeButton: pageNationState.activeButton - 1,
                  pageNotFound: pageNum > pageNationState.totalPages,
                  currentPage: pageNationState.currentPage - 1,
                };
              });
              handlePageChange(pageNationState.currentPage - 1);
            }
          }}
        >
          <FilledArrow
            color={
              pageNationState.activeButton + 1 === 1 ||
              pageNationState.pageNotFound
                ? "#793ba28a"
                : "#783BA2"
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {[
            ...Array(pageNationState.totalPages)
              .fill(0)
              .map((_, i) => i),
          ]
            .slice(pageNationState.startEnd.start, pageNationState.startEnd.end)
            .map((e, index) => (
              <button
                style={{
                  cursor: "pointer",
                  fontSize: "10px",
                  fontWeight: 700,
                  transition: ".4s linear",
                  width: 20,
                  height: 20,
                  borderRadius: 100,
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "3px solid var(--primary-color)",
                  color:
                    pageNationState.activeButton === e
                      ? "white"
                      : "var(--primary-color)",
                  background:
                    pageNationState.activeButton === e
                      ? "var(--primary-color)"
                      : "white",
                }}
                key={index}
                onClick={() => {
                  handlePageChange(e + 1);
                  setPageNationState((prev) => {
                    return {
                      ...prev,
                      activeButton: e,
                    };
                  });
                }}
                disabled={pageNationState.currentPage === e + 1}
              >
                {`${e + 1}`}
              </button>
            ))}
        </div>
        <div
          style={{
            transform: "rotate(-180deg)",
            cursor:
              pageNationState.activeButton + 1 === pageNationState.totalPages
                ? "no-drop"
                : "pointer",
          }}
          onClick={() => {
            if (pageNationState.activeButton + 1 < pageNationState.totalPages) {
              setPageNationState((prev) => {
                return {
                  ...prev,
                  startEnd: generateNumbersList(pageNum),
                  activeButton: pageNationState.activeButton + 1,
                  pageNotFound: pageNum > pageNationState.totalPages,
                  currentPage: pageNationState.currentPage + 1,
                };
              });
              handlePageChange(pageNationState.currentPage + 1);
            }
          }}
        >
          <FilledArrow
            color={
              pageNationState.activeButton + 1 === pageNationState.totalPages ||
              pageNationState.pageNotFound
                ? "#793ba28a"
                : "#783BA2"
            }
          />
        </div>
      </div>
    </>
  );
};

export default AITools;
