"use client";
import React, { useState, useEffect } from "react";
import styles from "./SignupFormTwo.module.css";
import FormField from "../../FormField/FormField";
import ACAButton from "../../ACAButton/ACAButton";
import UserCheck from "../../FormField/Icons/UserCheck";
import UserIcon from "../../FormField/Icons/UserIcon";
import LocationIcon from "../../FormField/Icons/LocationIcon";
import SocialButton from "../../SocialButtons/SocialButton";
import GoogleIcon from "../../SocialButtons/SocialIcon/GoogleIcon";
import FacebookIcon from "../../SocialButtons/SocialIcon/FacebookIcon";
import { ProfileCircleIcon } from "../../ACAButton/ACAButtonIcons";
import { FaAngleRight } from "react-icons/fa";

interface SignupFormTwoProps {
  onBack: () => void;
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    username: string;
    country: string;
  }) => void;
}

const SignupFormTwo: React.FC<SignupFormTwoProps> = ({ onBack, onSubmit }) => {
  const [checked, setChecked] = useState(false);
  const [fieldWidth, setFieldWidth] = useState("100%");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
    conditions: "",
  });

  useEffect(() => {
    /**
     * Handles window resize event to change the width of the form fields.
     * For larger screens (>= 768px), sets the width to 361px.
     * For smaller screens, sets the width to 100%.
     */
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFieldWidth("361px");
      } else {
        setFieldWidth("100%");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Handles changes to form fields by updating the form data
   * and resetting any error messages for the changed field.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - The change event from the form input.
   */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  /**
   * Checks if a given username already exists in the database.
   * @param username The username to check.
   * @returns A boolean indicating if the username exists.
   **/

  const checkUsernameExists = async (username: string): Promise<boolean> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const users = await response.json();
      return users.some(
        (user: { username: string }) => user.username === username
      );
    } catch (error) {
      console.error("Error checking username existence:", error);
      return false;
    }
  };

  const validate = async () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      username: "",
      country: "",
      conditions: "",
    };
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "الرجاء إدخال اسمك الأول";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "الرجاء إدخال اسم العائلة";
      isValid = false;
    } else if (/[^a-zA-Z\u0621-\u064A ]/.test(formData.lastName)) {
      newErrors.lastName =
        "لا يمكن أن يحتوي اسم العائلة على أرقام أو أحرف خاصة";
      isValid = false;
    }

    if (!formData.username) {
      newErrors.username = "الرجاء إدخال اسم المستخدم";
      isValid = false;
    } else {
      const usernameExists = await checkUsernameExists(formData.username);
      if (usernameExists) {
        newErrors.username = "اسم المستخدم هذا مأخوذ بالفعل. الرجاء اختيار آخر";
        isValid = false;
      }
    }

    if (!formData.country) {
      newErrors.country = "يرجى اختيار بلد إقامتك";
      isValid = false;
    }

    if (!checked) {
      newErrors.conditions = "يجب أن توافق على سياسة الخصوصية";
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

    if (await validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.title}>
        أنت على بعد خطوة واحدة فقط من الانضمام إلينا!
      </div>
      <div className={styles.subtitle}>أنشئ ملف التعريف الخاص بك</div>

      <div className={styles.fieldContainer}>
        <div className={styles.nameContainer}>
          <FormField
            label="الاسم الأول"
            placeholder="أدخل اسمك الأول"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            icon={<UserCheck />}
            width={fieldWidth}
          />

          <FormField
            label="الاسم الثاني"
            placeholder="أدخل اسم العائلة"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            icon={<UserCheck />}
            width={fieldWidth}
          />

          <div className={styles.errorTextNameContainer}>
            {errors.firstName && (
              <div id={styles.firstNameError} className={styles.errorTextName}>
                {errors.firstName}
              </div>
            )}

            {errors.lastName && (
              <div id={styles.lastNameError} className={styles.errorTextName}>
                {errors.lastName}
              </div>
            )}
          </div>
        </div>

        <FormField
          label="اسم المستخدم"
          placeholder="اختر اسم المستخدم"
          name="username"
          value={formData.username}
          onChange={handleChange}
          icon={<UserIcon />}
        />
        {errors.username && (
          <div id={styles.userNameError} className={styles.errorText}>
            {errors.username}
          </div>
        )}

        <FormField
          label="بلد الإقامة"
          placeholder="اختر بلدك"
          name="country"
          value={formData.country}
          onChange={handleChange}
          isDropDown
          options={["فلسطين", "العراق", "الأردن", "سوريا"]}
          icon={<LocationIcon />}
        />
        {errors.country && (
          <div id={styles.locationError} className={styles.errorText}>
            {errors.country}
          </div>
        )}
      </div>
      <div
        className={`${styles.checkboxContainer} ${
          errors.conditions ? styles.errorCheckboxContainer : ""
        }`}
      >
        <label
          className={`${styles.checkboxLabel} ${
            errors.conditions ? styles.errorLabel : ""
          }`}
        >
          يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا{" "}
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              if (!checked) setErrors({ ...errors, conditions: "" });
            }}
          />
          <span
            className={`${styles.checkmark} ${
              errors.conditions ? styles.errorCheckmark : ""
            }`}
          ></span>
        </label>
        {errors.conditions && (
          <div className={styles.errorText}>{errors.conditions}</div>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <ACAButton
          size="small"
          text="انشاء حسابي"
          icon={<ProfileCircleIcon />}
          variant="teal"
          type="submit"
        />

        <ACAButton
          size="small"
          text="رجوع"
          icon={<FaAngleRight size={25} />}
          variant="tomato"
          type="button"
          onClick={onBack}
        />
      </div>

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

export default SignupFormTwo;
