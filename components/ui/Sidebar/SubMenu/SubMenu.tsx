import React from "react";
import styles from "../Sidebar.module.css";
import { ArrowDown } from "../../Navbar/icons";
import { subMenuList } from "@/sections/Home/Courses/mock/subMenuList";

interface SubMenuProps {
  isResourcesOpen: boolean;
  toggleResources: () => void;
}
const SubMenu: React.FC<SubMenuProps> = ({
  isResourcesOpen,
  toggleResources,
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
                <li key={i} className={styles.subMenuItem}>
                  {e}
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
