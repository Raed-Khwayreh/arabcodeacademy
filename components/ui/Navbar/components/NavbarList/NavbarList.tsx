import React, { useState } from "react";
import styles from "../../Navbar.module.css";
import { subMenuList } from "@/sections/Home/Courses/mock/subMenuList";
import Link from "next/link";
import { ArrowDown } from "../../icons";

const NavbarList = () => {
  const [showResoursesList, setShowResoursesList] = useState(false);

  return (
    <div className={styles.links}>
      <div>المسارات التعليمية</div>
      <div>التواصل </div>
      <div
        onClick={() => setShowResoursesList((e) => !e)}
        className={styles["resource-list"]}
      >
        <div>المصادر</div>
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
    </div>
  );
};

export default NavbarList;
