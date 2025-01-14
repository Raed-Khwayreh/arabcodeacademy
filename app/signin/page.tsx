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
import Cookies from "js-cookie";
import Image from "next/image";
import LogOutIcon from "@/public/icons/LoginIcon";
import { ProfileCircleIcon } from "@/public/icons";
import useScreenSize from "@/utils/useScreenSize";

interface FormData {
  email: string;
  password: string;
  username?: string;
}

interface FormErrors {
  email: string;
  password: string;
  submit?: string;
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
  const [isLoading, setIsLoading] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const currentUser = Cookies.get("currentUser");

    if (accessToken && currentUser) {
      router.replace("/");
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setCredentialError("");
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
      setIsLoading(true);
      try {
        // Encode the password using Base64 encoding (btoa) before sending it in the request payload.
        const encodedPassword = btoa(formData.password);

        const response = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, password: encodedPassword }),
        });

        const data = await response.json();

        if (response.ok) {
          Cookies.set("accessToken", data.token, { expires: 7 });
          Cookies.set("currentUser", JSON.stringify(data.user), { expires: 7 });

          const loginEvent = new CustomEvent("userLogin", {
            detail: { user: data.user },
          });
          window.dispatchEvent(loginEvent);

          router.push("/");
        } else {
          setErrors((prev) => ({
            ...prev,
            submit: data.error || "حدث خطأ أثناء تسجيل الدخول",
          }));
        }
      } catch (error) {
        console.error(error);
        setErrors((prev) => ({
          ...prev,
          submit: "حدث خطأ أثناء تسجيل الدخول",
        }));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSignupRedirect = () => {
    router.push("/signup");
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <Image
          src={"/images/signin/loginImage.webp"}
          alt="Login"
          width={683}
          height={718}
          className={styles.image}
          priority
        />
        <div className={styles.formContent}>
          <div className={styles.felidsContainer}>
            <p className={styles["title"]}>تسجيل الدخول</p>
            <div className={styles["inputs"]}>
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
            <div className={styles["error-container"]}>
              {errors.submit && (
                <div className={styles.errorMessage}>{errors.submit}</div>
              )}
            </div>
            <div className={styles.optionsContainer}>
              <a href="#" className={styles.forgotPassword}>
                نسيت كلمة المرور؟
              </a>
              <label className={styles.checkboxLabel}>
                البقاء متصلا
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <ACAButton
              size={screenSize > 768 ? "medium" : "large"}
              text="إنشاء حساب جديد"
              variant="tomato"
              type="button"
              onClick={handleSignupRedirect}
              disabled={isLoading}
              icon={<ProfileCircleIcon />}
            />
            <ACAButton
              text="تسجيل الدخول"
              variant="teal"
              size={screenSize > 768 ? "medium" : "large"}
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              icon={<LogOutIcon />}
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
