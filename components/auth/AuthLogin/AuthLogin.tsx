"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AuthLogin.module.scss";

import AuthLogo from "../AuthLogo/AuthLogo";
import AuthInput from "../../ui/inputs/AuthInput/AuthInput";
import GlobalGreenButton from "../../ui/buttons/GlobalGreenButton";
import Link from "next/link";
import AuthService from "@/services/AuthService";
import useAuthStore from "../store";

const AuthLogin = () => {
  const authStore = useAuthStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await AuthService.login(formData);
      if (response.statusText === "OK") {
        const { access_token, prolong_token } = response.data;
        authStore.login(access_token, prolong_token);
        window.location.href = "/";
      }
    } catch (e) {
    } finally {
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.screen}>
        <AuthLogo />
        <form onSubmit={login}>
          <AuthInput
            type="email"
            value={email}
            placeholder="Імейл користувача"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />

          <div style={{ marginTop: "40px" }}></div>

          <AuthInput
            type="password"
            value={password}
            placeholder="Пароль"
            isEye={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />

          <div style={{ marginTop: "65px" }}></div>

          <GlobalGreenButton width="250px" height="46px">
            Увійти
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
