"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { ACAButton, Sidebar } from "@/components/ui";
import { LoginIcon, ProfileCircleIcon } from "../ACAButton/ACAButtonIcons";
import { ArrowDown, Avatar, BurgerMenu, Logout } from "./icons";
import { subMenuList } from "@/sections/Home/Courses/mock/subMenuList";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  country: string;
  id: number;
}

const Navbar = () => {
  const router = useRouter();
  const [showResoursesList, setShowResoursesList] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const currentUser = Cookies.get("currentUser");

    if (accessToken && currentUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(currentUser));
    }

    const handleLogin = (event: CustomEvent<{ user: UserData }>) => {
      setIsLoggedIn(true);
      setUserData(event.detail.user);
    };

    window.addEventListener("userLogin", handleLogin as EventListener);

    return () => {
      window.removeEventListener("userLogin", handleLogin as EventListener);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOnLogOut = async () => {
    try {
      const response = await fetch("/api/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      Cookies.remove("accessToken");
      Cookies.remove("currentUser");
      setIsLoggedIn(false);
      setUserData(null);
      router.push("/signin");
    } catch (error) {
      console.error("Error during logout:", error);
      router.push("/signin");
    }
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
          onLogin={() => router.push("/signin")}
        />
      )}
      <div className={styles["burger-menu"]}>
        {isLoggedIn && (
          <div className={styles["mobile-user-info"]}>
            <div className={styles["logout-mobile"]} onClick={handleOnLogOut}>
              <Logout />
            </div>
            <div className={styles.userInfo}>
              <Avatar />
              {userData && (
                <span className={styles.userName}>{userData.username}</span>
              )}
            </div>
          </div>
        )}
        <div onClick={toggleSidebar}>
          <BurgerMenu />
        </div>
      </div>
      {isLoggedIn ? (
        <div className={styles.logout}>
          <div onClick={handleOnLogOut}>
            <Logout />
          </div>
          <div className={styles.userInfo}>
            <Avatar />
            {userData && (
              <span className={styles.userName}>{userData.username}</span>
            )}
          </div>
        </div>
      ) : (
        <div className={styles["buttons-container"]}>
          <Link href="/signup">
            <ACAButton
              size="medium"
              variant="teal"
              text="إنشاء حساب"
              icon={<ProfileCircleIcon />}
            />
          </Link>
          <Link href="/signin">
            <ACAButton
              size="medium"
              variant="tomato"
              text="تسجيل الدخول"
              icon={<LoginIcon />}
            />
          </Link>
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
            <ul className={styles["resouces-menu"]}>
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
