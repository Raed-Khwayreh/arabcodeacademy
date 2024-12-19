import React from "react";
import styles from "./SignupFormOne.module.css";
import FormField from "../../FormField/FormField";
import EnvelopeIcon from "../../FormField/Icons/EnvelopeIcon";
import LockIcon from "../../FormField/Icons/LockIcon";
import ACAButton from "../../ACAButton/ACAButton";
import AngleLeft from "../../ACAButton/ACAButtonIcons/AngleLeft";
import SocialButton from "../../SocialButtons/SocialButton";
import GoogleIcon from "../../SocialButtons/SocialIcon/GoogleIcon";
import FacebookIcon from "../../SocialButtons/SocialIcon/FacebookIcon";

const SignupFormOne: React.FC = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.title}>قم بإنشاء حسابك على الأكاديمية!</div>
      <div className={styles.fieldContainer}>
        <FormField
          label="عنوان البريد الإلكتروني"
          placeholder="لن نشارك بريدك الإلكتروني أبدًا مع أي شخص"
          icon={<EnvelopeIcon />}
        />
        <FormField
          label="كلمة المرور"
          placeholder="قم بإنشاء كلمة مرور قوية"
          icon={<LockIcon />}
        />

        <FormField
          label="تأكيد كلمة المرور"
          placeholder="أعد إدخال كلمة المرور للتأكد من مطابقتها"
          icon={<LockIcon />}
        />
      </div>

      <ACAButton
        size="medium"
        text="التالي"
        icon={<AngleLeft />}
        variant="teal"
      />
      <div className={styles.accountPrompt}>لديك حساب مسبقاً</div>
      <div className={styles.loginPrompt}>يمكنك تسجيل الدخول باستخدام</div>

      <div className={styles.socialContainer}>
        <SocialButton icon={<GoogleIcon />} text="Google" variant="google" />
        <SocialButton
          icon={<FacebookIcon />}
          text="Facebook"
          variant="facebook"
        />
      </div>
    </div>
  );
};

export default SignupFormOne;
