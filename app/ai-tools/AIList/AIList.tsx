import AIToolCard, {
  AIToolCardProps,
} from "@/components/ui/AIToolCard/AIToolCard";
import React from "react";

interface AiList {
  data: AIToolCardProps[];
}

const AIList = ({ data }: AiList) => {
  return (
    <div
      style={{
        display: "grid",
        padding: 20,
        rowGap: 60,
        columnGap: 24,
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
      }}
    >
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

export default AIList;
