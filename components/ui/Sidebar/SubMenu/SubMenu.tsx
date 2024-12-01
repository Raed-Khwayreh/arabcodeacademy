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
      <ul
        className={styles.subMenu}
        style={{
          boxShadow: isResourcesOpen ? "#00000024 0px 2px 1px 2px" : "none",
          background: !isResourcesOpen ? "white" : " #71348814",
          borderRadius: isResourcesOpen ? 10 : 0,
        }}
      >
        <li
          style={{
            marginInline: !isResourcesOpen ? 18 : 0,
            marginTop: isResourcesOpen ? -1 : 0,
            background: isResourcesOpen ? "var(--primary-color)" : "white",
            color: isResourcesOpen ? "white" : "#713488",
            borderRadius: isResourcesOpen ? 10 : 0,
            borderBottom: !isResourcesOpen
              ? "1px solid var(--primary-color)"
              : "",
          }}
          className={`${styles.menuItem} ${styles.dropdown}`}
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
