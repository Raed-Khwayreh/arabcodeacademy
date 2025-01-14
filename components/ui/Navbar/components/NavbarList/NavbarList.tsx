import React, { useState } from "react";
import styles from "../../Navbar.module.css";
import { subMenuList } from "@/sections/Home/Courses/mock/subMenuList";
import Link from "next/link";
import { ArrowDown } from "../../icons";

const NavbarList = () => {
  const [showResoursesList, setShowResoursesList] = useState(false);

  return (
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
  );
};

export default NavbarList;
