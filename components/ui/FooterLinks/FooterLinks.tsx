import React from "react";
import UnderlineText from "../UnderlineText/UnderlineText";
import styles from "./FooterLinks.module.css";
import ACAButton from "../ACAButton/ACAButton";
import ChalkboardTeacher from "../ACAButton/ACAButtonIcons/ChalkboardTeacherIcon";

const FooterLinks = () => {
  return (
    <div className={styles.footer_links}>
      <div className={styles.links_container}>
        <div>
          <UnderlineText
            paddingLeft={30}
            paddingRight={0}
            centeredInMobile={true}
            title="معلومات"
            fontSize={{ desktop: 23, tablet: 25, mobile: 16 }}
            fontWeight={700}
            paddingBottom={12}
            borderWidth={1.3}
            color="#ffffff"
          />
          <div className={styles.lists}>
            <ul>
              <li>
                <a href="#">المساعدة والدعم</a>
              </li>
              <li>
                <a href="#">حول الأكاديمية</a>
              </li>
              <li>
                <a href="#">رسالة الأكاديمية</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <UnderlineText
            paddingLeft={30}
            paddingRight={0}
            centeredInMobile={true}
            title="السياسات"
            fontSize={{ desktop: 23, tablet: 25, mobile: 16 }}
            fontWeight={700}
            paddingBottom={12}
            borderWidth={1.3}
            color="#ffffff"
          />
          <div className={styles.lists}>
            <ul>
              <li>
                <a href="#">سياسة الاستخدام</a>
              </li>
              <li>
                <a href="#">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="#">إخلاء مسؤولية</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.button_layout}>
        <ACAButton
          text="المسارات التعليمية"
          variant="teal"
          size="medium"
          icon={<ChalkboardTeacher />}
        />
      </div>
    </div>
  );
};
export default FooterLinks;
