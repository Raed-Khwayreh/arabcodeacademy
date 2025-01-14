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
}

const Sidebar: FC<SidebarProps> = ({ isLoggedIn, onLogin, handleOnClick }) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState<boolean>(false);

  const toggleResources = (): void => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <nav className={styles.sidebar} style={{ top: isLoggedIn ? 84 : 62 }}>
      <ul className={styles.menu}>
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
        {!isLoggedIn && (
          <>
            <li onClick={onLogin} className={styles.menuItem}>
              <Link href="/signin">
                <span>تسجيل الدخول</span>
              </Link>
              <SignInIcon className={styles.icon} />
            </li>
            <Link href="/signup">
              <li className={styles.menuItem}>
                <span>إنشاء حساب</span>
                <CreateAccountIcon className={styles.icon} />
              </li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
