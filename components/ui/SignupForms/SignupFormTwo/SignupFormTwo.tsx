"use client";
import React, { useState, useEffect } from "react";
import styles from "./SignupFormTwo.module.css";
import FormField from "../../FormField/FormField";
import ACAButton from "../../ACAButton/ACAButton";
import UserCheck from "../../FormField/Icons/UserCheck";
import UserIcon from "../../FormField/Icons/UserIcon";
import LocationIcon from "../../FormField/Icons/LocationIcon";
import SocialButton from "../../SocialButtons/SocialButton";
import GoogleIcon from "../../SocialButtons/SocialIcon/GoogleIcon";
import FacebookIcon from "../../SocialButtons/SocialIcon/FacebookIcon";
import { ProfileCircleIcon } from "../../ACAButton/ACAButtonIcons";
import { FaAngleRight } from "react-icons/fa";

interface SignupFormTwoProps {
  onBack: () => void;
}

const SignupFormTwo: React.FC<SignupFormTwoProps> = ({ onBack }) => {
  const [checked, setChecked] = useState(false);
  const [fieldWidth, setFieldWidth] = useState("100%"); // Default width for smaller screens

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFieldWidth("361px");
      } else {
        setFieldWidth("100%");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className={styles.nameContainer}>
          <FormField
            label="الاسم الأول"
            placeholder="أدخل اسمك الأول"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            icon={<UserCheck />}
            width={fieldWidth}
          />

          <FormField
            label="الاسم الثاني"
            placeholder="أدخل اسم العائلة"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            icon={<UserCheck />}
            width={fieldWidth}
          />

          <div className={styles.errorTextNameContainer}>
            {errors.firstName && (
              <div id={styles.firstNameError} className={styles.errorTextName}>
                {errors.firstName}
              </div>
            )}

            {errors.lastName && (
              <div id={styles.lastNameError} className={styles.errorTextName}>
                {errors.lastName}
              </div>
            )}
          </div>
        </div>

        <FormField
          label="اسم المستخدم"
          placeholder="اختر اسم المستخدم"
          name="username"
          value={formData.username}
          onChange={handleChange}
          icon={<UserIcon />}
        />
        {errors.username && (
          <div id={styles.userNameError} className={styles.errorText}>
            {errors.username}
          </div>
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
          <div id={styles.locationError} className={styles.errorText}>
            {errors.country}
          </div>
        )}
      </div>
      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxLabel}>
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
          text="انشاء حسابي"
          icon={<ProfileCircleIcon />}
          variant="teal"
          type="submit"
        />

        <ACAButton
          size="small"
          text="رجوع"
          icon={<FaAngleRight size={25} />}
          variant="tomato"
          type="button"
          onClick={onBack}
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
