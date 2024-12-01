"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { ACAButton } from "@/components/ui";
import { LoginIcon, ProfileCircleIcon } from "../ACAButton/ACAButtonIcons";
import { ArrowDown, Avatar, BurgerMenu, Logout } from "./icons";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOnlogin = () => {
    setIsLoggedIn(true);
  };

  const handleOnLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.navbar}>
      {isSidebarOpen && (
        <Sidebar isLoggedIn={isLoggedIn} onLogin={handleOnlogin} />
      )}
      <div className={styles["burger-menu"]} onClick={toggleSidebar}>
        {isLoggedIn && (
          <div className={styles["logout-mobile"]}>
            <div onClick={handleOnLogOut}>
              <Logout />
            </div>
            <Avatar />
          </div>
        )}
        <BurgerMenu />
      </div>
      {isLoggedIn ? (
        <div className={styles.logout}>
          <div onClick={handleOnLogOut}>
            <Logout />
          </div>
          <Avatar />
        </div>
      ) : (
        <div className={styles["buttons-container"]}>
          <ACAButton
            size="medium"
            variant="teal"
            text="إنشاء حساب"
            icon={<ProfileCircleIcon />}
          />
          <div onClick={handleOnlogin}>
            <ACAButton
              size="medium"
              variant="tomato"
              text="تسجيل الدخول"
              icon={<LoginIcon />}
            />
          </div>
        </div>
      )}
      <ul className={styles.links}>
        <li>المسارات التعليمية</li>
        <li>التواصل </li>
        <div className={styles["resource-list"]}>
          <li>المصادر</li>
          <ArrowDown />
        </div>
      </ul>
      <Image
        className={styles.image}
        src={"/images/logo.png"}
        alt="logo"
        width={280}
        height={61.79}
      />
    </div>
  );
};

export default Navbar;
