"use client";

import React, { useState, FC } from "react";
import styles from "./Sidebar.module.css";
import SignInIcon from "./icons/LogIn.svg";
import CreateAccountIcon from "./icons/CreateAccount.svg";
import AngleDownIcon from "./icons/Polygon.svg";

interface SidebarProps {
  isLoggedIn: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isLoggedIn }) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState<boolean>(false);

  const toggleResources = (): void => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.menu}>
        {!isLoggedIn && (
          <>
            <li className={styles.menuItem}>
              <span>تسجيل الدخول</span>
              <SignInIcon className={styles.icon} />
            </li>
            <li className={styles.menuItem}>
              <span>إنشاء حساب</span>
              <CreateAccountIcon className={styles.icon} />
            </li>
          </>
        )}

        <li className={styles.menuItem}>
          <span>المسارات التعليمية</span>
        </li>

        <li
          className={`${styles.menuItem} ${styles.dropdown}`}
          onClick={toggleResources}
        >
          <div className={styles.meanuHeader}>
            <span className={styles.menuHeader}>المصادر</span>
            <AngleDownIcon className={styles.iconDropDown} />
          </div>
          {isResourcesOpen && (
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>المدونة</li>
              <li className={styles.subMenuItem}>المنتدى</li>
              <li className={styles.subMenuItem}>قاموس المصطلحات</li>
              <li className={styles.subMenuItem}>دروس فيديو قصيرة</li>
              <li className={styles.subMenuItem}>
                دليل أدوات الذكاء الاصطناعي
              </li>
              <li className={styles.subMenuItem}>بنك الأسئلة التقنية</li>
              <li className={styles.subMenuItem}>دروس و أنماط الميدجورني</li>
              <li className={styles.subMenuItem}>لغة الضاد</li>
            </ul>
          )}
        </li>

        <li className={styles.menuItem}>التواصل</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
