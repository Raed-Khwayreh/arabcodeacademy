"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { ACAButton, Sidebar } from "@/components/ui";
import { LoginIcon, ProfileCircleIcon } from "../ACAButton/ACAButtonIcons";
import { ArrowDown, Avatar, BurgerMenu, Logout } from "./icons";
import { subMenuList } from "@/sections/Home/Courses/mock/subMenuList";
import Link from "next/link";

const Navbar = () => {
  const [showResoursesList, setShowResoursesList] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOnlogin = () => {
    setIsLoggedIn(true);
    setIsSidebarOpen(false);
  };

  const handleOnLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleOnClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.navbar}>
      {isSidebarOpen && (
        <Sidebar
          handleOnClick={handleOnClick}
          isLoggedIn={isLoggedIn}
          onLogin={handleOnlogin}
        />
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
        <div
          onClick={() => setShowResoursesList((e) => !e)}
          className={styles["resource-list"]}
        >
          <li>المصادر</li>
          {showResoursesList && (
            <ul className={styles["resouces-menu"]} style={{}}>
              {subMenuList.map((e, i) => {
                return (
                  <li key={i}>
                    <Link href={e.href}>{e.title}</Link>
                  </li>
                );
              })}
            </ul>
          )}
          <div
            className={styles.arrowDown}
            style={{ transform: showResoursesList ? "rotate(60deg)" : "" }}
          >
            <ArrowDown />
          </div>
        </div>
      </ul>
      <Link href="/">
        <div className={styles["image-contanier"]}>
          <Image
            className={styles.image}
            src={"/images/logo.png"}
            alt="logo"
            width={280}
            height={61}
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
