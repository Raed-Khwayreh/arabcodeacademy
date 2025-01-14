"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Sidebar } from "@/components/ui";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { logout } from "./utils/logout";

import {
  Logout,
  NavbarButtons,
  NavbarList,
  NavbarLogo,
  NavbarMenu,
} from "./components";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const currentUser = Cookies.get("currentUser");
    if (accessToken && currentUser) {
      setIsLoggedIn(true);
    }
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
    window.addEventListener("userLogin", handleLogin as EventListener);
    setIsLoading(false);
    return () => {
      window.removeEventListener("userLogin", handleLogin as EventListener);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOnClick = () => {
    setIsSidebarOpen(false);
  };

  const handleOnLogOut = () => {
    logout()
      .then(() => {
        setIsLoggedIn(false);
        router.push("/signin");
      })
      .catch(() => {
        router.push("/signin");
      });
  };

  return (
    <div className={styles.navbar}>
      {isSidebarOpen && (
        <Sidebar
          handleOnClick={handleOnClick}
          toggleSidebar={toggleSidebar}
          isLoggedIn={isLoggedIn}
          onLogin={() => router.push("/signin")}
        />
      )}
      <NavbarMenu
        handleOnLogOut={handleOnLogOut}
        isLoggedIn={isLoggedIn}
        toggleSidebar={toggleSidebar}
      />
      {isLoggedIn ? (
        <Logout handleOnLogOut={handleOnLogOut} />
      ) : (
        <NavbarButtons isLoading={isLoading} />
      )}
      <NavbarList />
      <NavbarLogo />
    </div>
  );
};

export default Navbar;
