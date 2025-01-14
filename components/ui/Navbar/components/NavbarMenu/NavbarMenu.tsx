import React from "react";
import styles from "../../Navbar.module.css";

import { Avatar, BurgerMenu, SignoutIcon } from "../../icons";
import Link from "next/link";

interface NavbarMenuProps {
  isLoggedIn: boolean;
  handleOnLogOut: () => void;
  toggleSidebar: () => void;
}

const NavbarMenu = ({
  isLoggedIn,
  handleOnLogOut,
  toggleSidebar,
}: NavbarMenuProps) => {
  return (
    <div className={styles["burger-menu"]}>
      {isLoggedIn && (
        <div className={styles["mobile-user-info"]}>
          <Link href="/profile">
            <div className={styles.userInfo}>
              <Avatar />
            </div>
          </Link>
          <div className={styles["logout-mobile"]} onClick={handleOnLogOut}>
            <SignoutIcon />
          </div>
        </div>
      )}
      <button onClick={toggleSidebar}>
        <BurgerMenu />
      </button>
    </div>
  );
};

export default NavbarMenu;
