'use client';
import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: typeof errors = { email: "", password: "", confirmPassword: "" };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "يرجى تأكيد كلمة المرور";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمات المرور غير متطابقة";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.title}>قم بإنشاء حسابك على الأكاديمية!</div>
      <div className={styles.fieldContainer}>
        <FormField
          label="عنوان البريد الإلكتروني"
          placeholder="لن نشارك بريدك الإلكتروني أبدًا مع أي شخص"
          icon={<EnvelopeIcon />}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className={styles.errorText}>{errors.email}</div>}

        <FormField
          label="كلمة المرور"
          placeholder="قم بإنشاء كلمة مرور قوية"
          icon={<LockIcon />}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div className={styles.errorText}>{errors.password}</div>
        )}

        <FormField
          label="تأكيد كلمة المرور"
          placeholder="أعد إدخال كلمة المرور للتأكد من مطابقتها"
          icon={<LockIcon />}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <div className={styles.errorText}>{errors.confirmPassword}</div>
        )}
      </div>

      <ACAButton
        size="medium"
        text="التالي"
        icon={<AngleLeft />}
        variant="teal"
        type="submit"
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
    </form>
  );
};

export default SignupFormOne;
