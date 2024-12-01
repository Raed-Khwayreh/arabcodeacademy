import React from "react";
import styles from "./SocialMedia.module.css";
import Image from "next/image";
import UnderlineText from "../UnderlineText/UnderlineText";
import socialMediaIcons from "./data/socialMediaIcons";

const SocialMedia: React.FC = () => {
  return (
    <div className={styles.container}>
      <UnderlineText
        title="مواقع التواصل الاجتماعي"
        fontSize={{ desktop: 23, tablet: 25, mobile: 16 }}
        fontWeight={500}
        paddingBottom={12}
        borderWidth={1.3}
      />
      <div className={styles.iconContainer}>
        {socialMediaIcons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={34}
            height={34}
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
