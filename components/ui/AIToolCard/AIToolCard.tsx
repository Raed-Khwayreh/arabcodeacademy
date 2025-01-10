import React, { useState } from "react";
import styles from "./AIToolCard.module.css";
import Image from "next/image";
import AIToolImage from "@/public/images/aitool/ai-tool-image.webp";
import ACAButton from "../ACAButton/ACAButton";
import EllipsisCircleIcon from "../ACAButton/ACAButtonIcons/EllipsisCircleIcon";

import { AIToolsCardProps } from "@/types/AIToolCardProps";
import Favorite from "../Favorite/Favorite";
export interface Props {
  cardData: AIToolsCardProps;
  handleOnPressFavoriteCard: (n: number) => void;
  isFavoritesPressed: boolean;
}

export default function AIToolCard({
  cardData,
  isFavoritesPressed,
  handleOnPressFavoriteCard,
}: Props) {
  const handleOnPressFavorite = (id: number) => {
    handleOnPressFavoriteCard(id);
    if (!fadeOut && isFavoritesPressed) {
      setFadeOut(true);
    }
  };

  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div
      className={`${styles.card} ${
        fadeOut ? styles["fade-out"] : styles["fade-in"]
      }`}
    >
      <div className={styles.image_container}>
        <Image
          loading="lazy"
          src={AIToolImage}
          alt="AI tool image"
          className={styles.image}
        />
      </div>
      <div className={styles.card_body}>
        <div>
          <div className={styles.card_header}>
            <div className={styles.card_title}>{cardData.title}</div>
            <div className={styles.card_tags}>
              {cardData.tags.map((e, i) => {
                return <div key={i}>{e}</div>;
              })}
            </div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.line_clamp}>{cardData.description}</div>
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
        <Favorite
          id={cardData.tool_id}
          isFav={cardData.isFav}
          handleOnPressFavoriteCard={handleOnPressFavorite}
        />
      </div>
    </div>
  );
}
