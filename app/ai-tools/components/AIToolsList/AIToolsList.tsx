import React from "react";
import styles from "./AIToolsList.module.css";
import AIToolCard from "@/components/ui/AIToolCard/AIToolCard";
import { AIToolsCardProps } from "@/types/AIToolCardProps";

interface AIToolsListData {
  data: AIToolsCardProps[];
  handleOnPressFavoriteCard: (n: number) => void;
  isFavoritesPressed: boolean;
}

const AIToolsList = ({
  data,
  handleOnPressFavoriteCard,
  isFavoritesPressed,
}: AIToolsListData) => {
  return (
    <div className={styles["attools-list-container"]}>
      {data.map((_, i) => {
        return (
          <AIToolCard
            key={data[i].tool_id}
            handleOnPressFavoriteCard={handleOnPressFavoriteCard}
            cardData={data[i]}
            isFavoritesPressed={isFavoritesPressed}
          />
        );
      })}
    </div>
  );
};

export default AIToolsList;
