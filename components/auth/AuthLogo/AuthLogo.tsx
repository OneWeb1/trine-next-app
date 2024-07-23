import React from "react";
import styles from "./AuthLogo.module.scss";
import Image from "next/image";

const AuthLogo = () => {
  return (
    <div className={styles.authLogo}>
      <Image
        src="/assets/auth/auth-logo.svg"
        alt="auth-logo"
        width={104}
        height={89}
      />
    </div>
  );
};

export default AuthLogo;
