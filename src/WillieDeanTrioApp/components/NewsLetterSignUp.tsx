import { ChangeEventHandler, useState } from "react";
import styles from "./NewsLetterSignUp.module.css";

function NewsLetterSignUp() {
  const [form, setForm] = useState({
    email: "",
    submitted: false,
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      email: value,
    });
  };

  const handleSubmit = () => {
    if (!form.email) {
      return;
    }
    setForm({
      ...form,
      submitted: true,
    });
  };

  const handleReset = () => {
    setForm({
      ...form,
      email: "",
      submitted: false,
    });
  };

  return (
    <div>
      <div className={styles.newsLetterSignUp}>
        {form.submitted ? (
          <div className={styles.submitted}>
            <div className={styles.newsLetterSignUp_title}>
              Thank you for signing up!
            </div>
            <p>We'll keep you posted on the latest news.</p>
            <button
              className={styles.newsLetterSignUp_formInputBtn}
              onClick={handleReset}
            >
              Add another email
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.newsLetterSignUp_title}>
              Newsletter Sign Up
            </div>
            <div className={styles.newsLetterSignUp_form}>
              <input
                type="text"
                className={styles.newsLetterSignUp_formInput}
                placeholder="Email Address"
                onChange={handleInputChange}
              />
              <button
                className={styles.newsLetterSignUp_formInputSubmit}
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsLetterSignUp;
