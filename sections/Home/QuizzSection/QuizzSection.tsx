import React from "react";
import FeatureList from "./FeatureList/FeatureList";
import { imagesData, quizzSectionsData } from "./mocks/QuizzSectionData";
import Img from "next/image";
import styles from "./QuizzSection.module.css";
import Button from "@/components/ui/ACAButton/ACAButton";
import DocumentCheckIcon from "@/components/ui/ACAButton/ACAButtonIcons/DocumentCheckIcon";

const QuizzSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftContent}>
        {quizzSectionsData.map((section, index) => (
          <FeatureList
            key={index}
            title={section.title}
            description={section.description}
            icon={section.icon}
          />
        ))}
        <Button
          text="قسم الامتحانات"
          variant="tomato"
          size="large"
          icon={<DocumentCheckIcon />}
        />
      </div>

      <div className={styles.rightContent}>
        <div className={styles.img_container}>
          {imagesData.map((image, index) => (
            <Img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizzSection;
