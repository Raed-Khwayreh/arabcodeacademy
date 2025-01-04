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
   * Checks if an email already exists in the database.
   * @param email The email to check.
   * @returns A boolean indicating if the email exists.
   */
  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const users = await response.json();
      return users.some((user: { email: string }) => user.email === email);
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false;
    }
  };

  /**
   * Validates the form data.
   * @returns A boolean indicating if the data is valid.
   */
  const validate = async () => {
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
    } else {
      const emailExists = await checkEmailExists(formData.email || "");
      if (emailExists) {
        newErrors.email =
          "عنوان البريد الإلكترونى هذا مسجل بالفعل. حاول تسجيل الدخول باستخدام بريدًا إلكترونيًا مختلفًا";
        isValid = false;
      }
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
      isValid = false;
    } else if ((formData.password || "").length < 8) {
      newErrors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
      isValid = false;
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        formData.password || ""
      )
    ) {
      newErrors.password =
        "يجب أن تتضمن كلمة المرور حرفًا كبيرًا واحدًا ورقمًا واحدًا وحرفًا خاصًا واحدًا على الأقل";
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
   * Submits the form and validates the data.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = await validate();
    if (isValid) {
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          labelAlign="center"
          error={errors.email}
        />
        {errors.email && <div className={styles.errorText}>{errors.email}</div>}

        <FormField
          label="كلمة المرور"
          placeholder="قم بإنشاء كلمة مرور قوية"
          icon={<LockIcon />}
          name="password"
          value={formData.password || ""}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          labelAlign="center"
          error={errors.password}
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
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          labelAlign="center"
          error={errors.confirmPassword}
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
