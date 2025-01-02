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


  const handleNextForm = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
    setCurrentForm(2);
  };

  const handlePreviousForm = () => {
    setCurrentForm(1);
  };

  /**
   * Submits the final form data to create a new user.
   * Merges the existing form data with the provided data and sends a POST request to the server.
   * Logs a success message if the user is created successfully, otherwise logs an error.
   *
   * @param {Partial<FormData>} data - The additional form data to be merged and submitted.
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
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.signupPage}>
      {currentForm === 1 ? (
        <SignupFormOne onNext={handleNextForm} onDataChange={handleNextForm} />
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
