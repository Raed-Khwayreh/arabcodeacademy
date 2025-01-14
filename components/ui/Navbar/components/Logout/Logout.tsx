import React from "react";
import Link from "next/link";
import { Avatar } from "../../icons";
import styles from "../../Navbar.module.css";
import SignoutIcon from "../../icons/SignoutIcon";

interface LogoutProps {
  handleOnLogOut: () => void;
}

const Logout = ({ handleOnLogOut }: LogoutProps) => {
  return (
    <div className={styles.logout}>
      <div onClick={handleOnLogOut}>
        <SignoutIcon />
      </div>
      <Link href="/profile">
        <div className={styles.userInfo}>
          <Avatar />
        </div>
      </Link>
    </div>
  );
};

export default Logout;
