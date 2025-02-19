import React from "react";
import { LocationIcon, PhoneContactIcon, MessageIcon } from "./Icons";
import ACAButton from "../ACAButton/ACAButton";
import styles from "./ContactInfoCard.module.css";
import PhoneIcon from "../../../public/icons/PhoneIcon";
import UnderlineText from "../UnderlineText/UnderlineText";

const ContactInfoCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.title}>
          <UnderlineText
            title="التواصل"
            fontSize={{ desktop: 23, tablet: 25, mobile: 16 }}
            fontWeight={500}
            paddingBottom={12}
            paddingLeft={20}
            paddingRight={0}
            centeredInMobile={false}
            borderWidth={1.3}
          />
        </div>

        <div className={styles.infoItem}>
          <LocationIcon />
          <span>المقر الرئيسي: بريطانيا، لندن</span>
        </div>
        <div className={styles.infoItem}>
          <PhoneContactIcon />
          <span>+447918713367</span>
        </div>
        <div className={styles.infoItem}>
          <MessageIcon />
          <span>info@arabcodeacademy.com</span>
        </div>
      </div>

      <span className={styles.buttonContainer}>
        <ACAButton
          variant="teal"
          size="small"
          text="تواصل معنا"
          icon={<PhoneIcon width={21} height={20} />}
        />
      </span>
    </div>
  );
};

export default ContactInfoCard;
