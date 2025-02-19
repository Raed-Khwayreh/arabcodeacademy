"use client";
import React, { useEffect, useRef } from "react";
import styles from "./VideoSection.module.css";
import DhadIcon from "./icons/DhadIcon";
import { ACAButton } from "@/components/ui";
import DocumentListIcon from "@/public/icons/DocumentListIcon";
import useScreenSize from "@/utils/useScreenSize";

/**
 * A section on the home page that displays a video and some text about language.
 *
 * The video is either a small or large version, depending on the screen size.
 * When the screen size changes, the video source is updated.
 *
 * @returns The video section component.
 */
const VideoSection: React.FC = () => {
  const screenSize = useScreenSize();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateVideoSource = () => {
      const video = videoRef.current;
      if (video) {
        const isMobile = window.innerWidth <= 768;
        const source = isMobile
          ? "/videoSection/dhadSection_small.webm"
          : "/videoSection/dhadSection_large.webm";

        if (video.src !== source) {
          video.src = source;
          video.load();
        }
      }
    };

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  return (
    <main className={styles.main}>
      <video
        poster={
          screenSize < 768
            ? "/videoSection/posterLarge.webp"
            : "/videoSection/poster.webp"
        }
        ref={videoRef}
        autoPlay
        muted
        loop
        className={styles.video}
      />

      <div className={styles.container}>
        <div className={styles.icon}>
          <DhadIcon />
        </div>

        <span className={styles.title}>لغة ضاد</span>
        <p className={styles.content}>
          في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى تعليمي
          يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة العربية. ومن
          هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي شخص، سواء
          كان مبتدئًا أو محترفًا، من فهمها واستيعابها بسهولة. نحرص على أن تكون
          الشروحات دقيقة وشاملة مع توفير أمثلة عملية تساعد المتعلمين على تطبيق
          ما يتعلمونه بشكل فعال.
        </p>
      </div>
      <div className={styles.button}>
        <ACAButton
          text="لغة الضاد"
          variant="tomato"
          size="medium"
          icon={<DocumentListIcon />}
        />
      </div>
    </main>
  );
};

export default VideoSection;
