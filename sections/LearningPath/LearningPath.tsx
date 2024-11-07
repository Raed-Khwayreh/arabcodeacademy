"use client";
import React from "react";
import PromoText from "../../components/ui/PromoText/PromoText";
import Image from "next/image";
import ImageSource from "@/public/images/learning-path-image.png";
import styles from "./LearningPath.module.css";
import ACAButton from "@/components/ui/ACAButton/ACAButton";

const LearningPath = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={styles.learning_path_section}>
      <div className={styles.promotext_style}>
        <PromoText
          title="التجربة التعليمية في الأكاديمية العربية للبرمجة"
          text="الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية تواكب أحدث التقنيات والأساليب التعليمية."
          button={
            isMobile && (
              <ACAButton
                text="المسارات التعليمية"
                variant="teal"
                size="medium"
              />
            )
          }
        />
        <div>
          {!isMobile && (
            <ACAButton text="المسارات التعليمية" variant="teal" size="medium" />
          )}
        </div>
      </div>
      <div className="img_container">
        <Image
          src={ImageSource}
          alt="learning path image"
          className={styles.img}
          priority
        />
      </div>
    </div>
  );
};

export default LearningPath;
