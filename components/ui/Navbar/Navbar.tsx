import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { ACAButton } from "@/components/ui";
import { LoginIcon, ProfileCircleIcon } from "../ACAButton/ACAButtonIcons";
import { ArrowDown, BurgerMenu } from "./icons";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["burger-menu"]}>
        <BurgerMenu />
      </div>
      <div className={styles["buttons-container"]}>
        <ACAButton
          size="medium"
          variant="teal"
          text="إنشاء حساب"
          icon={<ProfileCircleIcon />}
        />
        <ACAButton
          size="medium"
          variant="tomato"
          text="تسجيل الدخول"
          icon={<LoginIcon />}
        />
      </div>
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
