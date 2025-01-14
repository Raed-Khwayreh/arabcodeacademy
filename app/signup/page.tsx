"use client";
import SignupFormOne from "@/components/ui/SignupForms/SignupFormOne/SignupFormOne";
import SignupFormTwo from "@/components/ui/SignupForms/SignupFormTwo/SignupFormTwo";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface FormData {
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  country?: string;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState<FormData>({});

  /**
   * Moves to the next form step while merging the data.
   * @param {Partial<FormData>} data - Form data to merge.
   */
  const handleNextForm = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
    setCurrentForm(2); // Navigate to the second form
  };

  /**
   * Moves back to the previous form.
   */
  const handlePreviousForm = () => {
    setCurrentForm(1); // Navigate back to the first form
  };

  /**
   * Handles automatic login after successful signup
   * @param {FormData} userData - The user data to login with
   */
  const handleAutoLogin = async (userData: FormData) => {
    try {
      const loginData = {
        email: userData.email,
        password: userData.password,
        username: userData.email,
      };

      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Auto-login failed");
        router.push("/signin");
        return;
      }

      // Set cookies and dispatch login event
      Cookies.set("accessToken", data.token, { expires: 7 });
      Cookies.set("currentUser", JSON.stringify(data.user), { expires: 7 });

      const loginEvent = new CustomEvent("userLogin", {
        detail: { user: data.user },
      });
      window.dispatchEvent(loginEvent);

      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.error("Error during auto-login:", error);
      router.push("/signin");
    }
  };

  /**
   * Submits the complete form data to the backend.
   * @param {Partial<FormData>} data - Final form data to submit.
   */
  const handleFinalSubmit = async (data: Partial<FormData>) => {
    const finalData = { ...formData, ...data };

    try {
      const response = await fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        await handleAutoLogin(finalData as FormData);
      } else {
        console.error("Failed to create user:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className={styles.signupPage}>
      {currentForm === 1 ? (
        <SignupFormOne onNext={handleNextForm} />
      ) : (
        <SignupFormTwo
          onBack={handlePreviousForm}
          onSubmit={handleFinalSubmit}
        />
      )}
    </div>
  );
};

export default Signup;
