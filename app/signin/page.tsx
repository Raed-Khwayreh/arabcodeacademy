"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { ACAButton } from "@/components/ui";
import FormField from "@/components/ui/FormField/FormField";
import LockIcon from "@/components/ui/FormField/Icons/LockIcon";
import EnvelopeIcon from "@/components/ui/FormField/Icons/EnvelopeIcon";
import SocialButton from "@/components/ui/SocialButtons/SocialButton";
import GoogleIcon from "@/components/ui/SocialButtons/SocialIcon/GoogleIcon";
import FacebookIcon from "@/components/ui/SocialButtons/SocialIcon/FacebookIcon";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const Signin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const currentUser = Cookies.get('currentUser');
    
    if (accessToken && currentUser) {
      router.replace('/');
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: FormErrors = {
      email: "",
      password: "",
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "الرجاء إدخال بريدك الإلكتروني";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "يرجى إدخال كلمة المرور";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'حدث خطأ أثناء تسجيل الدخول');
        }

        // Store token in cookies
        Cookies.set('accessToken', data.token, { expires: 7 }); // Expires in 7 days
        Cookies.set('currentUser', JSON.stringify(data.user), { expires: 7 });

        router.push('/');
      } catch (error) {
        console.error('Error during login:', error);
        setErrors({
          email: error instanceof Error ? error.message : "حدث خطأ أثناء تسجيل الدخول",
          password: error instanceof Error ? error.message : "حدث خطأ أثناء تسجيل الدخول"
        });
      }
    }
  };

  const handleSignupRedirect = () => {
    router.push('/signup');
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.title}>تسجيل الدخول</div>

        <FormField
          label="اسم المستخدم أو البريد الإلكتروني"
          placeholder="أدخل بريدك الإلكتروني"
          icon={<EnvelopeIcon />}
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        {errors.email && <div className={styles.errorText}>{errors.email}</div>}

        <FormField
          label="كلمة المرور"
          placeholder="أدخل كلمة المرور"
          icon={<LockIcon />}
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        {errors.password && (
          <div className={styles.errorText}>{errors.password}</div>
        )}

        <div className={styles.optionsContainer}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span> إبقاء متصلاً
          </label>
          <a href="#" className={styles.forgotPassword}>
            نسيت كلمة المرور؟
          </a>
        </div>

        <div className={styles.buttonContainer}>
          <ACAButton
            size="medium"
            text="تسجيل الدخول"
            variant="teal"
            type="submit"
          />
          <ACAButton
            size="medium"
            text="إنشاء حساب جديد"
            variant="tomato"
            type="button"
            onClick={handleSignupRedirect}
          />
        </div>

        <div className={styles.divider}>أو</div>

        <div className={styles.socialContainer}>
          <SocialButton
            icon={<GoogleIcon />}
            text="Google"
            variant="google"
          />
          <SocialButton
            icon={<FacebookIcon />}
            text="Facebook"
            variant="facebook"
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
