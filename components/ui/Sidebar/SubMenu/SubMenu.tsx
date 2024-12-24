import React from "react";
import styles from "../Sidebar.module.css";
import { ArrowDown } from "../../Navbar/icons";
import { subMenuList } from "@/sections/Home/Courses/mock/subMenuList";
import Link from "next/link";

interface SubMenuProps {
  isResourcesOpen: boolean;
  toggleResources: () => void;
  handleOnClick: () => void;
}
const SubMenu: React.FC<SubMenuProps> = ({
  isResourcesOpen,
  toggleResources,
  handleOnClick,
}) => {
  return (
    <div>
      <ul className={isResourcesOpen ? styles.subMenuOpen : styles.subMenu}>
        <li
          className={`${styles.menuItem}  ${
            isResourcesOpen ? styles.pressed : styles.notpressed
          }`}
          onClick={toggleResources}
        >
          <div className={styles.meanuHeader}>
            <span className={styles.menuHeader}>المصادر</span>
            <ArrowDown
              color={isResourcesOpen ? "white" : "var(--primary-color)"}
            />
          </div>
        </li>
        {isResourcesOpen && (
          <ul>
            {subMenuList.map((e, i) => {
              return (
                <li
                  onClick={handleOnClick}
                  key={i}
                  className={styles.subMenuItem}
                >
                  <Link href={e.href}>{e.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default SubMenu;
