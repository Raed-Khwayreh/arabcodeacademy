"use client";
import React from "react";
import styles from "./ResourcesCardSection.module.css";
import dynamic from "next/dynamic";
import ACALoading from "@/components/ui/ACALoading";

const ResourcesListLazyComponent = dynamic(
  () => import("./ResourcesList/ResourcesList"),
  {
    loading: () => <ACALoading />,
    ssr: false,
  }
);

const ResourcesCardSection: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles["slider-container"]}>
        <ResourcesListLazyComponent />
      </div>
    </div>
  );
};

export default ResourcesCardSection;
