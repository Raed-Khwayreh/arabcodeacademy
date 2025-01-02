"use client";
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

interface FormData {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface SignupFormOneProps {
  onNext: (data: Partial<FormData>) => void;
  onDataChange: (data: Partial<FormData>) => void;
}

const SignupFormOne: React.FC<SignupFormOneProps> = ({ onNext }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  /**
   * Handles changes to form fields, updating the form data and resetting the error messages.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e The change event.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  /**
   * Validates the form data and returns a boolean indicating whether the form is valid.
   * If the form is invalid, it also updates the errors state with the corresponding error messages.
   */
  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email || "")) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
      isValid = false;
    } else if ((formData.password || "").length < 8) {
      newErrors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "يرجى تأكيد كلمة المرور";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword =
        "كلمات المرور غير متطابقة. يرجى المحاولة مرة أخرى";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /**
   * Handles form submission, prevents default behavior, and calls onNext if form is valid.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      onNext(formData);
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
          value={formData.email || ""}
          onChange={handleChange}
          labelAlign="center"
        />
        {errors.email && <div className={styles.errorText}>{errors.email}</div>}

        <FormField
          label="كلمة المرور"
          placeholder="قم بإنشاء كلمة مرور قوية"
          icon={<LockIcon />}
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          labelAlign="center"
        />
        {errors.password && (
          <div className={styles.errorText}>{errors.password}</div>
        )}

        <FormField
          label="تأكيد كلمة المرور"
          placeholder="أعد إدخال كلمة المرور للتأكد من مطابقتها"
          icon={<LockIcon />}
          name="confirmPassword"
          value={formData.confirmPassword || ""}
          onChange={handleChange}
          labelAlign="center"
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
