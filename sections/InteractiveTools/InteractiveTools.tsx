import React from "react";
import styles from "./InteractiveTools.module.css";
import PromoText from "../../components/ui/PromoText/PromoText";
import ACAButton from "../../components/ui/ACAButton/ACAButton";
import PhoneIcon from "../../components/ui/ACAButton/ACAButtonIcons/PhoneIcon";

const InteractiveTools = () => {
  return (
    <div className={styles["interactive-tools"]}>
      <div className={styles["promo-text-container"]}>
        <PromoText
          title="أدوات تفاعلية والعاب تعليمية"
          text="تتميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية مبتكرة باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم أكثر متعة وجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات، حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف بنجاح."
          opacity={0.9}
          button={
            <ACAButton
              size="medium"
              variant="teal"
              text="تواصل معنا"
              icon={<PhoneIcon color="white" width="22" height="23.38px" />}
            />
          }
        />
      </div>
    </div>
  );
};

export default InteractiveTools;
