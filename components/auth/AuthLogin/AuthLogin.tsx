"use client";

import styles from "./AuthLogin.module.scss";

import AuthLogo from "../AuthLogo/AuthLogo";
import AuthInput from "../../ui/inputs/AuthInput/AuthInput";
import GlobalGreenButton from "../../ui/buttons/GlobalGreenButton";
import Link from "next/link";
import useAuthStore from "../store";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorText from "@/components/ui/ErrorText/ErrorText";
import { useEffect, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const AuthLogin = () => {
  const authStore = useAuthStore();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: "all" });

  const login = async (email: string, password: string) => {
    authStore.login(email, password);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login(data.email, data.password);
    console.log({ data });
  };

  useEffect(() => {
    if (authStore.resetForm) reset();
  }, [authStore.resetForm, reset]);

  return (
    <div className={styles.login}>
      <div style={{ marginTop: "0px" }}></div>

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
              borderError={!!errors.email}
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
              borderError={!!errors.password}
              isEye={true}
            />
            <ErrorText>
              {errors.password && <p>{`${errors.password.message}`}</p>}
              {authStore.error && (
                <p>Неправільна електронна адреса або пароль</p>
              )}
            </ErrorText>
          </div>

          <div style={{ marginTop: "65px" }}></div>

          <GlobalGreenButton width="250px" height="46px" disabled={!isValid}>
            {!authStore.loading ? "Увійти" : "Вхід..."}
          </GlobalGreenButton>
        </form>

        <div style={{ marginTop: "85px" }}></div>

        <div className={styles.bottomLinkWrapper}>
          <Link className={styles.link} href={"/auth/registration"}>
            Реєстрація
          </Link>

          <div style={{ marginTop: "20px" }}></div>

          <div>
            <Link className={styles.link} href={"/auth/forgot-password"}>
              Забули пароль?
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

export default AuthLogin;
