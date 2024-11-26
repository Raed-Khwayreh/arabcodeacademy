import React from "react";
import styles from "./SocialMedia.module.css";
import Image from "next/image";

type ImgProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const Img: React.FC<ImgProps> = ({ src, alt, width, height, className }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

const SocialMedia: React.FC = () => {
  const socialMediaIcons = [
    {
      src: "/Images/SocialMedia/linkedin.png",
      alt: "LinkedIn",
      width: 34,
      height: 34,
    },
    {
      src: "/Images/SocialMedia/twitter.png",
      alt: "X (formerly Twitter)",
      width: 34,
      height: 34,
    },
    {
      src: "/Images/SocialMedia/instagram.png",
      alt: "Instagram",
      width: 34,
      height: 34,
    },
    {
      src: "/Images/SocialMedia/facebook.png",
      alt: "Facebook",
      width: 34,
      height: 34,
    },
    {
      src: "/Images/SocialMedia/discord.png",
      alt: "Discord",
      width: 34,
      height: 34,
    },
    {
      src: "/Images/SocialMedia/threads.png",
      alt: "Threads",
      width: 34,
      height: 34,
    },
    {
      src: "/Images/SocialMedia/youtube.png",
      alt: "YouTube",
      width: 34,
      height: 34,
    },
    {
      src: "/Images/SocialMedia/tiktok.png",
      alt: "TikTok",
      width: 34,
      height: 34,
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.mainHeader}>مواقع التواصل الاجتماعي</p>
      <div className={styles.iconContainer}>
        {socialMediaIcons.map((icon, index) => (
          <Img
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className={styles.icon}
          />
        ))}
      </div>
      <div className={styles.footerText}>
        <p>
          انضم الآن إلى مجتمع المبرمجين في الأكاديمية
          <span className={styles.breakLine}>
            وابدأ رحلتك نحو احتراف البرمجة!
          </span>
        </p>
      </div>
    </div>
  );
};

export default SocialMedia;
