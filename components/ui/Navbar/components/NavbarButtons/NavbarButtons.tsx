import React from "react";
import styles from "../../Navbar.module.css";
import Link from "next/link";
import { LoginIcon, ProfileCircleIcon } from "@/public/icons";
import ACAButton from "@/components/ui/ACAButton/ACAButton";
import { Spinner } from "@chakra-ui/react";

const NavbarButtons = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className={styles["buttons-container"]}>
      {isLoading ? (
        <Spinner color={"white"} size="xl" fontWeight={"bold"} />
      ) : (
        <>
          <Link href="/signup">
            <ACAButton
              size="medium"
              variant="teal"
              text="إنشاء حساب"
              icon={<ProfileCircleIcon />}
            />
          </Link>
          <Link href="/signin">
            <ACAButton
              size="medium"
              variant="tomato"
              text="تسجيل الدخول"
              icon={<LoginIcon />}
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default NavbarButtons;
