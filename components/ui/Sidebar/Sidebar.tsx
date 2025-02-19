"use client";

import React, { useState, FC } from "react";
import styles from "./Sidebar.module.css";
import SignInIcon from "./icons/LogIn.svg";
import CreateAccountIcon from "./icons/CreateAccount.svg";

import SubMenu from "./SubMenu/SubMenu";
import Link from "next/link";

interface SidebarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  handleOnClick: () => void;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  isLoggedIn,
  onLogin,
  handleOnClick,
  toggleSidebar,
}) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState<boolean>(false);

  const toggleResources = (): void => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const handleOnSignIn = () => {
    onLogin();
    toggleSidebar();
  };

  return (
    <nav className={styles.sidebar} style={{ top: isLoggedIn ? 84 : 62 }}>
      <ul className={styles.menu}>
        {!isLoggedIn && (
          <>
            <li onClick={handleOnSignIn} className={styles.menuItem}>
              <Link href="/signin">
                <span>تسجيل الدخول</span>
              </Link>
              <SignInIcon className={styles.icon} />
            </li>
            <li onClick={toggleSidebar} className={styles.menuItem}>
              <Link href="/signup" className={styles["create-account"]}>
                <span>إنشاء حساب</span>
                <CreateAccountIcon className={styles.icon} />
              </Link>
            </li>
          </>
        )}
        <li onClick={handleOnClick} className={styles.menuItem}>
          <span>المسارات التعليمية</span>
        </li>
        <li>
          <SubMenu
            handleOnClick={handleOnClick}
            isResourcesOpen={isResourcesOpen}
            toggleResources={toggleResources}
          />
        </li>
        <li onClick={handleOnClick} className={styles.menuItem}>
          التواصل
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
