"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./ForgotPassword.module.scss";
import AuthLogo from "../AuthLogo/AuthLogo";
import AuthInput from "../../ui/inputs/AuthInput/AuthInput";
import GlobalGreenButton from "../../ui/buttons/GlobalGreenButton";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuthStore from "../store";
import ErrorText from "@/components/ui/ErrorText/ErrorText";

interface FormData {
  email: string;
  password: string;
}

const Forgot = () => {
  const authStore = useAuthStore();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: "all" });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { email } = data;
    // authStore.registration(email, password);
  };

  return (
    <div className={styles.forgotPassword}>
      <div className={styles.screen}>
        <AuthLogo />
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AuthInput
              register={register("email", {
                required: "Заповніть це поле",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неправільна адреса електронної пошти",
                },
              })}
              type="email"
              placeholder="Електронна адреса"
            />
            <ErrorText>
              {errors.email && <p>{`${errors.email.message}`}</p>}
            </ErrorText>
          </div>

          <div style={{ marginTop: "50px" }}></div>

          <div className={styles.text}>
            Перевірте повідомлення на пошті. На всякий випадок перевірте папку
            “Спам”.
          </div>

          <div style={{ marginTop: "35px" }}></div>

          <GlobalGreenButton width="250px" height="46px" disabled={!isValid}>
            Відправити
          </GlobalGreenButton>
        </form>

        <div style={{ marginTop: "120px" }}></div>

        <div className={styles.bottomLinkWrapper}>
          <Link className={styles.link} href={"/auth/registration"}>
            Реєстрація
          </Link>

          <div style={{ marginTop: "20px" }}></div>

          <div>
            <Link className={styles.link} href={"/auth/login"}>
              Вхід
            </Link>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}></div>

        <span className={styles.bottomText}>
          Умови надання послуг і політика конфіденційності
        </span>
      </div>
    </div>
  );
};

export default Forgot;
