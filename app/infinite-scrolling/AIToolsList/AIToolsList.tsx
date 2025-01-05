import React from "react";
import { AIToolsCardProps } from "@/types/AIToolCardProps";
import styles from "../InfiniteScrolling.module.css";
import AIToolCard from "@/components/ui/AIToolCard/AIToolCard";
import ACAError from "@/components/ui/ACAError";
import { ErrorMessage } from "@/types/ErrorMessage";

interface AIListProps {
  data: AIToolsCardProps[];
}

const AIToolsList = ({ data }: AIListProps) => {
  if (data.length === 0)
    return <ACAError errorMessage={ErrorMessage.NO_RESULTS} />;

  return (
    <div className={styles["attools-list-container"]}>
      {data.map((item: AIToolsCardProps) => (
        <AIToolCard
          cardData={item}
          isFavoritesPressed={true}
          key={item.tool_id}
        />
      ))}
    </div>
  );
};

export default AIToolsList;
