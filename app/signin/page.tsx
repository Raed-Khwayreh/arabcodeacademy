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
import Image from "next/image";
import LogOutIcon from "@/components/ui/ACAButton/ACAButtonIcons/LoginIcon";
import { ProfileCircleIcon } from "@/components/ui/ACAButton/ACAButtonIcons";

interface FormData {
  email: string;
  password: string;
  username?: string;
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
  
  const [credentialError, setCredentialError] = useState("");

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
    setErrors(prev => ({ ...prev, [name]: "" }));
    setCredentialError(""); // Clear credential error when user types
  };

  const validate = () => {
    const newErrors: FormErrors = {
      email: "",
      password: "",
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "الرجاء إدخال اسم المستخدم أو البريد الإلكتروني";
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
        const loginData = {
          email: formData.email,
          password: formData.password,
          username: formData.email
        };

        const response = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        const data = await response.json();

        if (!response.ok) {
          setCredentialError("بيانات الدخول غير صحيحة");
          return;
        }

        Cookies.set('accessToken', data.token, { expires: 7 });
        Cookies.set('currentUser', JSON.stringify(data.user), { expires: 7 });

        const loginEvent = new CustomEvent('userLogin', { 
          detail: { user: data.user } 
        });
        window.dispatchEvent(loginEvent);
        router.push('/');
      } catch (error) {
        console.error('Error during login:', error);
        setCredentialError("حدث خطأ أثناء تسجيل الدخول");
      }
    }
  };

  const handleSignupRedirect = () => {
    router.push('/signup');
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/loginPage.JPG"
            alt="Login"
            width={270}
            height={240}
            className={styles.image}
            priority
            
          />
        </div>
        <div className={styles.formContent}>
          <div className={styles.felidsContainer}>
            <FormField
              label="اسم المستخدم أو البريد الإلكتروني"
              placeholder=" أدخل بريدك الإلكتروني أو اسم المستخدم"
              icon={<EnvelopeIcon />}
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              labelAlign="center"

            />

            <FormField
              label="كلمة المرور"
              placeholder="أدخل كلمة المرور"
              icon={<LockIcon />}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password || credentialError}
              labelAlign="center"
            />
          </div>

          <div className={styles.optionsContainer}>
            <label className={styles.checkboxLabel}>
              البقاء متصلا 
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
            <a href="#" className={styles.forgotPassword}>
              نسيت كلمة المرور؟
            </a>
          </div>

          <div className={styles.buttonContainer}>
            <ACAButton
              size="small"
              text="تسجيل الدخول"
              variant="teal"
              type="submit"
              icon={<LogOutIcon/>}
            />
            <ACAButton
              size="small"
              text="إنشاء حساب جديد"
              variant="tomato"
              type="button"
              onClick={handleSignupRedirect}
              icon={<ProfileCircleIcon/>}
            />
          </div>

          <div className={styles.divider}>يمكنك تسجيل الدخول باستخدام</div>

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
        </div>
      </form>
    </div>
  );
};

export default Signin;
