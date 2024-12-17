import AIToolCard, {
  AIToolCardProps,
} from "@/components/ui/AIToolCard/AIToolCard";
import React from "react";
import styles from "./AIToolsList.module.css";

interface AIToolsListData {
  data: AIToolCardProps[];
}

const AIToolsList = ({ data }: AIToolsListData) => {
  return (
    <div className={styles["attools-list-container"]}>
      {data.map((e: AIToolCardProps) => {
        return (
          <AIToolCard
            key={e.tool_id}
            title={e.title}
            description={e.description}
            tags={e.tags}
          />
        );
      })}
    </div>
  );
};

export default AIToolsList;
