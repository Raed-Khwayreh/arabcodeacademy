import React from "react";
import styles from "./AIToolCard.module.css";
import Image from "next/image";
import AIToolImage from "@/public/images/ai-tool-image.png";
import ACAButton from "../ACAButton/ACAButton";
import EllipsisCircleIcon from "../ACAButton/ACAButtonIcons/EllipsisCircleIcon";
import Favorite from "../Favorite/Favorite";
export interface AIToolCardProps {
  tool_id?: number;
  title: string;
  imageURL?: string;
  description: string;
  tags?: string[];
  isFav?: boolean;
  subject?: string[];
  pricing?: string[];
}

export default function AIToolCard({
  tags = [],
  title = "title",
  description,
  isFav = false,
}: AIToolCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <Image
          src={AIToolImage}
          alt="AI tool image"
          style={{ width: "100%" }}
        />
      </div>
      <div className={styles.card_body}>
        <div>
          <div className={styles.card_header}>
            <div className={styles.card_title}>{title}</div>
            <div className={styles.card_tags}>
              {tags.map((e, i) => {
                return <div key={i}>{e}</div>;
              })}
            </div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.line_clamp}>{description}</div>
          </div>
        </div>
        <div className={styles.card_footer}>
          <ACAButton
            boxShadow="0px 4px 4px 0px #00000040"
            text="المزيد"
            size="small"
            variant="teal"
            icon={<EllipsisCircleIcon />}
          />
        </div>
      </div>
      <div className={styles.favorite}>
        <Favorite isFav={isFav} />
      </div>
    </div>
  );
}
