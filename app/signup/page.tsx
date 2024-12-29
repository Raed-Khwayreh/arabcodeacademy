'use client';
import SignupFormOne from '@/components/ui/SignupForms/SignupFormOne/SignupFormOne';
import SignupFormTwo from '@/components/ui/SignupForms/SignupFormTwo/SignupFormTwo';
import React, { useState } from 'react';
import styles from './page.module.css';
const Signup: React.FC = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNextForm = () => {
    setCurrentForm(2);
  };

  const handlePreviousForm = () => {
    setCurrentForm(1);
  };

  return (
    <div className={styles.signupPage}>
      {currentForm === 1 ? (
        <SignupFormOne onNext={handleNextForm} />
      ) : (
        <SignupFormTwo onBack={handlePreviousForm} />
      )}
    </div>
  );
};

export default Signup;
