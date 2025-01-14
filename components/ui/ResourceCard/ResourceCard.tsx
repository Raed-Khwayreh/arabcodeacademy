import React from "react";
import styles from "./ResourceCard.module.css";
import EllipsisCircleIcon from "../../../public/icons/EllipsisCircleIcon";
import ACAButton from "../ACAButton/ACAButton";
import Link from "next/link";

interface Props {
  title: string;
  icon: React.ReactNode;
  href?: string;
}

const ResourceCard: React.FC<Props> = ({ title, icon, href = "" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div
        className={styles.title}
        style={{ width: title === "بنك الأسئلة التقنية" ? 192 : 220 }}
      >
        {title}
      </div>
      <div className={styles.buttonContainer}>
        {
          <Link href={href}>
            <ACAButton
              text="...المزيد"
              variant="teal"
              size="medium"
              icon={<EllipsisCircleIcon />}
            />
          </Link>
        }
      </div>
    </div>
  );
};

export default ResourceCard;
