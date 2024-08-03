import React from "react";
import styles from "./AuthLogo.module.scss";
import CustomImage from "@/components/ui/images/CustomImage/CustomImage";

const AuthLogo = () => {
  return (
    <div className={styles.authLogo}>
      <CustomImage
        src="/assets/auth/auth-logo.svg"
        alt="auth-logo"
        width={104}
        height={89}
      />
    </div>
  );
};

export default AuthLogo;
