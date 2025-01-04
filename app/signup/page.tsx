"use client";
import SignupFormOne from "@/components/ui/SignupForms/SignupFormOne/SignupFormOne";
import SignupFormTwo from "@/components/ui/SignupForms/SignupFormTwo/SignupFormTwo";
import React, { useState } from "react";
import styles from "./page.module.css";

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
   * Submits the complete form data to the backend.
   * @param {Partial<FormData>} data - Final form data to submit.
   */
  const handleFinalSubmit = async (data: Partial<FormData>) => {
    const finalData = { ...formData, ...data };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        console.log("User created successfully:", finalData);
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
        <SignupFormTwo onBack={handlePreviousForm} onSubmit={handleFinalSubmit} />
      )}
    </div>
  );
};

export default Signup;
