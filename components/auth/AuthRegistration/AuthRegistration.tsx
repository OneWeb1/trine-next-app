"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./AuthRegistration.module.scss";
import AuthInput from "../../ui/inputs/AuthInput/AuthInput";
import GlobalGreenButton from "../../ui/buttons/GlobalGreenButton";
import Link from "next/link";
import AuthLogo from "../AuthLogo/AuthLogo";
import useAuthStore from "../store";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorText from "@/components/ui/ErrorText/ErrorText";

interface FormData {
  email: string;
  password: string;
}

const AuthRegistration = () => {
  const authStore = useAuthStore();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: "all" });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { email, password } = data;
    authStore.registration(email, password);
  };

  useEffect(() => {
    if (authStore.resetForm) reset();
  }, [authStore.resetForm, reset]);

  return (
    <div className={styles.registration}>
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

          <div style={{ marginTop: "40px" }}></div>
          <div>
            <AuthInput
              register={register("password", {
                required: "Заповніть це поле",
                minLength: {
                  value: 6,
                  message: "Пароль повинен містити не менше 6 символів",
                },
              })}
              type="password"
              placeholder="Пароль"
              isEye={true}
            />
            <ErrorText>
              {errors.password && <p>{`${errors.password.message}`}</p>}
              {authStore.error && (
                <p>Хмм... Спробуйте ввести другу електронну адресу</p>
              )}
            </ErrorText>
          </div>

          <div style={{ marginTop: "65px" }}></div>

          <GlobalGreenButton width="250px" height="46px">
            Реєстрація
          </GlobalGreenButton>
        </form>

        <div style={{ marginTop: "120px" }}></div>

        <div className={styles.bottomLinkWrapper}>
          Є аккаунт?{" "}
          <Link className={styles.link} href={"/auth/login"}>
            Увійти зараз
          </Link>
        </div>

        <div style={{ marginTop: "40px" }}></div>

        <span className={styles.bottomText}>
          Умови надання послуг і політика конфіденційності
        </span>
      </div>
    </div>
  );
};

export default AuthRegistration;
