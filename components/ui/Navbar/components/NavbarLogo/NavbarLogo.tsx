import Link from "next/link";
import React from "react";
import styles from "../../Navbar.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.webp";

const NavbarLogo = () => {
  return (
    <Link href="/">
      <div className={styles["image-contanier"]}>
        <Image
          className={styles.image}
          src={logo}
          alt="logo"
          width={280}
          height={61}
        />
      </div>
    </Link>
  );
};

export default NavbarLogo;
