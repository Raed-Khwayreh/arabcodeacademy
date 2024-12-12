import React from "react";
import styles from "./HeroComponent.module.css";
import { ACAButton } from "@/components/ui";
import ChalkboardTeacherIcon from "@/components/ui/ACAButton/ACAButtonIcons/ChalkboardTeacherIcon";

const HeroComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headings}>
        <h1 className={styles["right-headings"]}>
          تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية
          في المهجر بالطلبة العرب أينما كانوا
        </h1>
        <div className={styles.centerButton}>
          <ACAButton
            size="large"
            text="المسارات التعليمية"
            variant="teal"
            icon={<ChalkboardTeacherIcon />}
          />
        </div>
        <div className={styles.left}>
          <div className={styles["left-headings"]}>
            <h1>
              تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة
              من الدروس والمناهج الاحترافية بجودة عالية
            </h1>
            <h1>
              وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين
              والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني
            </h1>
          </div>
          <div className={styles.bottomButton}>
            <ACAButton
              size="large"
              text="المسارات التعليمية"
              variant="teal"
              icon={<ChalkboardTeacherIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
