"use client";
import React, { useState } from "react";
import styles from "./SignupFormTwo.module.css";
import FormField from "../../FormField/FormField";
import ACAButton from "../../ACAButton/ACAButton";
import AngleLeft from "../../ACAButton/ACAButtonIcons/AngleLeft";
import UserCheck from "../../FormField/Icons/UserCheck";
import UserIcon from "../../FormField/Icons/UserIcon";
import LocationIcon from "../../FormField/Icons/LocationIcon";
import SocialButton from "../../SocialButtons/SocialButton";
import GoogleIcon from "../../SocialButtons/SocialIcon/GoogleIcon";
import FacebookIcon from "../../SocialButtons/SocialIcon/FacebookIcon";

interface SignupFormTwoProps {
  onBack: () => void;
}

const SignupFormTwo: React.FC<SignupFormTwoProps> = ({ onBack }) => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: typeof errors = {
      firstName: "",
      lastName: "",
      username: "",
      country: "",
    };
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "الرجاء إدخال اسمك الأول";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "الرجاء إدخال اسم العائلة";
      isValid = false;
    }

    if (!formData.username) {
      newErrors.username = "الرجاء إدخال اسم المستخدم";
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = "يرجى اختيار بلد إقامتك";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Final Form Data:", formData);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.title}>
        أنت على بعد خطوة واحدة فقط من الانضمام إلينا!
      </div>
      <div className={styles.subtitle}>أنشئ ملف التعريف الخاص بك</div>

      <div className={styles.fieldContainer}>
        <FormField
          label="الاسم الأول"
          placeholder="أدخل اسمك الأول"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          icon={<UserCheck />}
        />
        {errors.firstName && (
          <div className={styles.errorText}>{errors.firstName}</div>
        )}

        <FormField
          label="الاسم الثاني"
          placeholder="أدخل اسم العائلة"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          icon={<UserCheck />}
        />
        {errors.lastName && (
          <div className={styles.errorText}>{errors.lastName}</div>
        )}

        <FormField
          label="اسم المستخدم"
          placeholder="اختر اسم المستخدم"
          name="username"
          value={formData.username}
          onChange={handleChange}
          icon={<UserIcon />}
        />
        {errors.username && (
          <div className={styles.errorText}>{errors.username}</div>
        )}

        <FormField
          label="بلد الإقامة"
          placeholder="اختر بلدك"
          name="country"
          value={formData.country}
          onChange={handleChange}
          isDropDown
          options={["فلسطين", "العراق", "الأردن", "سوريا"]}
          icon={<LocationIcon />}
        />
        {errors.country && (
          <div className={styles.errorText}>{errors.country}</div>
        )}
      </div>

      <div className={styles.checkboxContainer}>
        <label className={styles.customCheckboxContainer}>
          يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا{" "}
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>

      <div className={styles.buttonGroup}>
        <ACAButton
          size="small"
          text="رجوع"
          icon={<AngleLeft />}
          variant="teal"
          type="button"
          onClick={onBack}
        />
        <ACAButton
          size="small"
          text="التالي"
          icon={<AngleLeft />}
          variant="teal"
          type="submit"
        />
      </div>

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
    </form>
  );
};

export default SignupFormTwo;
