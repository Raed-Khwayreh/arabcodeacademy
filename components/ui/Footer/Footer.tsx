import React from "react";
import styles from "./Footer.module.css";
import ContactInfoCard from "@/components/ui/ContactInfoCard/ContactInfoCard";

import {
  ACAButton,
  FooterLinks,
  SocialMedia,
  UnderlineText,
} from "@/components/ui";
import resourcesData from "./data/resourcesData";
import Image from "next/image";
import LogoImage from "@/public/images/footer-logo.webp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_main}>
          <div className={styles.footer_links}>
            <FooterLinks />
          </div>
          <div className={styles.contact}>
            <ContactInfoCard />
            <SocialMedia />
          </div>
        </div>
        <div className={styles.resources}>
          <div className={styles.title}>
            <UnderlineText
              title="المصادر"
              fontSize={{ desktop: 23, tablet: 25, mobile: 16 }}
              fontWeight={700}
              paddingBottom={12}
              paddingLeft={30}
              paddingRight={0}
              centeredInMobile={true}
              borderWidth={1.3}
              color="#FFFFFF"
            />
          </div>
          <div className={styles.resources_links}>
            {resourcesData.map((resource) => (
              <ACAButton
                key={resource.id}
                text={resource.title}
                variant="transparent"
                size="xlarge"
              />
            ))}
          </div>
        </div>
        <hr className={styles.break} />
        <div className={styles.copyright}>
          <div className={styles.image_container}>
            <Image className={styles.img} src={LogoImage} alt="logo" />
          </div>
          <div className={styles.ref}>
            جميع الحقوق محفوظة &copy; 2023 الأكاديمية العربية للبرمجة
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
