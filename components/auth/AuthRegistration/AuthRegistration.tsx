"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./AuthRegistration.module.scss";
import AuthInput from "../../ui/inputs/AuthInput/AuthInput";
import GlobalGreenButton from "../../ui/buttons/GlobalGreenButton";
import Link from "next/link";
import AuthLogo from "../AuthLogo/AuthLogo";

const AuthRegistration = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.registration}>
      <div className={styles.screen}>
        <AuthLogo />
        <form>
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
