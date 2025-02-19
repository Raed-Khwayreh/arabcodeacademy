"use client";
import React from "react";
import styles from "./ResourcesCardSection.module.css";
import dynamic from "next/dynamic";
import { ACALoading } from "@/components/ui";

const ResourcesListLazyComponent = dynamic(
  () => import("./ResourcesList/ResourcesList"),
  {
    loading: () => <ACALoading />,
    ssr: false,
  }
);

const ResourcesCardSection: React.FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles["slider-container"]}>
        <ResourcesListLazyComponent />
      </div>
    </section>
  );
};

export default ResourcesCardSection;
