import React from "react";
import styles from "./AIToolCard.module.css";
import Image from "next/image";
import AIToolImage from "@/public/images/ai-tool-image.png";
import ACAButton from "../ACAButton/ACAButton";
import EllipsisCircleIcon from "../ACAButton/ACAButtonIcons/EllipsisCircleIcon";

export default function AIToolCard() {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <Image src={AIToolImage} alt="AI tool image" />
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_header}>
          <div className={styles.card_title}>Luna Ai</div>
          <div className={styles.card_tags}>
            <div>#social media</div>
            <div>#personal assistant</div>
          </div>
        </div>
        <div className={styles.card_content}>
          <div className={styles.line_clamp}>
            يساعد الطلاب والكتّاب في إنشاء مقالات عالية الجودة بسهولة. هل تعاني
            من كتابة الأوراق الأكاديمية؟ مولد المقالات المجاني هنا للمساعدة!
            توليد العملاء بواسطة الذكاء الاصطناعي. يضع صوتك في رسائل البريد
            الإلكتروني. يعمل مع أي بريد إلكتروني. حوّل العملاء
          </div>
        </div>
        <div className={styles.card_footer}>
          <ACAButton
            text="المزيد"
            size="small"
            variant="teal"
            icon={<EllipsisCircleIcon />}
          />
        </div>
      </div>
    </div>
  );
}
