"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./ForgotPassword.module.scss";
import AuthLogo from "../AuthLogo/AuthLogo";
import AuthInput from "../../ui/inputs/AuthInput/AuthInput";
import GlobalGreenButton from "../../ui/buttons/GlobalGreenButton";
import Link from "next/link";

const Forgot = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.forgotPassword}>
      <div className={styles.screen}>
        <AuthLogo />
        <form>
          <AuthInput
            type="email"
            value={email}
            placeholder="Введіть імейл користувача"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />

          <div style={{ marginTop: "50px" }}></div>

          <div className={styles.text}>
            Перевірте повідомлення на пошті. На всякий випадок перевірте папку
            “Спам”.
          </div>

          <div style={{ marginTop: "35px" }}></div>

          <GlobalGreenButton width="250px" height="46px">
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
