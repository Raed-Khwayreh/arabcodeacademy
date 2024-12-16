"use client";
import ACALoading from "@/components/ui/ACALoading";
import { AIToolCardProps } from "@/components/ui/AIToolCard/AIToolCard";

import React, { useEffect, useRef, useState } from "react";
import AIList from "./AIList/AIList";
import { useRouter, useSearchParams } from "next/navigation";

const AITools = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<AIToolCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [activeButton, setActive] = useState(
    parseInt(searchParams.get("page") || "1", 10) - 1
  );
  const size = useRef(0);
  const [notFound, setNotFound] = useState(false);
  const [startEnd, setStartEnd] = useState({
    start:
      parseInt(searchParams.get("page") || "1", 10) % 5 === 0
        ? (parseInt(searchParams.get("page") || "1", 10) % 5) - 4
        : parseInt(searchParams.get("page") || "1", 10) % 5 === 1
        ? parseInt(searchParams.get("page") || "1", 10) - 1
        : parseInt(searchParams.get("page") || "1", 10) -
          Math.round(parseInt(searchParams.get("page") || "1", 10) % 5),
    end:
      parseInt(searchParams.get("page") || "1", 10) -
      Math.round(parseInt(searchParams.get("page") || "1", 10) % 5) +
      5,
    // start: parseInt(searchParams.get("page") || "1", 10) - 1,
    // end: parseInt(searchParams.get("page") || "1", 10) - 1 + 5,
  });
  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page_size=${size.current}&page=${page}`
      );
      const result = await response.json();
      setData(result.data); // Assuming the API returns data in this format
      setTotalPages(result.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 400);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  useEffect(() => {
    setStartEnd({
      start:
        parseInt(searchParams.get("page") || "1", 10) % 5 === 0
          ? (parseInt(searchParams.get("page") || "1", 10) % 5) - 4
          : parseInt(searchParams.get("page") || "1", 10) % 5 === 1
          ? parseInt(searchParams.get("page") || "1", 10) - 1
          : parseInt(searchParams.get("page") || "1", 10) -
            Math.round(parseInt(searchParams.get("page") || "1", 10) % 5),
      end:
        parseInt(searchParams.get("page") || "1", 10) % 5 === 0
          ? parseInt(searchParams.get("page") || "1")
          : parseInt(searchParams.get("page") || "1", 10) -
            Math.round(parseInt(searchParams.get("page") || "1", 10) % 5) +
            5,
    });
    setActive(parseInt(searchParams.get("page") || "1", 10) - 1);
    size.current =
      window.innerWidth > 1280
        ? 12
        : window.innerWidth < 1279 && window.innerWidth > 850
        ? 8
        : 4;
    setNotFound(parseInt(searchParams.get("page") || "1", 10) > totalPages);
    const page = parseInt(searchParams.get("page") || "1", 10);
    setCurrentPage(page);
    fetchData(page);
  }, [searchParams, totalPages]);

  const handlePageChange = (newPage: number): void => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`/ai-tools?page=${newPage}`); // Update URL for App Router
    }
  };

  return (
    <>
      {notFound ? (
        <div
          style={{
            transition: ".6s",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "var(--primary-color)",
              fontWeight: 900,
              fontSize: 40,
            }}
          >{`لم يتم العثور على الصفحة ${currentPage}`}</h1>
        </div>
      ) : loading ? (
        <div
          style={{
            transition: ".6s",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ACALoading />
        </div>
      ) : (
        <AIList data={data} />
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
          style={{ cursor: activeButton + 1 === 1 ? "default" : "pointer" }}
          onClick={() => {
            if (activeButton + 1 !== 1) {
              setActive((e) => e - 1);
              setCurrentPage((e) => e - 1);
              handlePageChange(currentPage - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="37"
            viewBox="0 0 32 37"
            fill="none"
          >
            <path
              d="M2.35342 21.2276C0.393124 20.0656 0.393128 17.2284 2.35342 16.0663L27.1577 1.36265C29.1575 0.177197 31.6875 1.61855 31.6875 3.94331V33.3507C31.6875 35.6754 29.1575 37.1168 27.1577 35.9313L2.35342 21.2276Z"
              fill={
                activeButton + 1 === 1 || notFound ? "#793ba28a" : "#783BA2"
              }
            />
          </svg>
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
            ...Array(totalPages)
              .fill(0)
              .map((_, i) => i),
          ]
            .slice(startEnd.start, startEnd.end)
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
                  color: activeButton === e ? "white" : "var(--primary-color)",
                  background:
                    activeButton === e ? "var(--primary-color)" : "white",
                }}
                key={index}
                onClick={() => {
                  handlePageChange(e + 1);
                  setActive(e);
                }}
                disabled={currentPage === e + 1}
              >
                {`${e + 1}`}
              </button>
            ))}
        </div>
        <div
          style={{
            transform: "rotate(-180deg)",
            cursor: activeButton + 1 === totalPages ? "no-drop" : "pointer",
          }}
          onClick={() => {
            if (activeButton + 1 < totalPages) {
              setActive((e) => e + 1);
              setCurrentPage((e) => e + 1);
              handlePageChange(currentPage + 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="37"
            viewBox="0 0 32 37"
            fill="none"
          >
            <path
              d="M2.35342 21.2276C0.393124 20.0656 0.393128 17.2284 2.35342 16.0663L27.1577 1.36265C29.1575 0.177197 31.6875 1.61855 31.6875 3.94331V33.3507C31.6875 35.6754 29.1575 37.1168 27.1577 35.9313L2.35342 21.2276Z"
              fill={
                activeButton + 1 === totalPages || notFound
                  ? "#793ba28a"
                  : "#783BA2"
              }
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AITools;
