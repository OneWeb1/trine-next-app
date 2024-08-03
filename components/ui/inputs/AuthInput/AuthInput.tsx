"use client";

import React, { ChangeEvent, FC, useState } from "react";
import styles from "./AuthInput.module.scss";
import CustomImage from "../../images/CustomImage/CustomImage";

type AuthInputProps = {
  type: string;
  value: string;
  placeholder: string;
  isEye?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput: FC<AuthInputProps> = ({
  type,
  value,
  placeholder,
  isEye,
  onChange,
}) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <div className={styles.inputWrapper}>
      <input
        style={{ background: "orange" }}
        type={
          isEye && !isShowPassword
            ? type
            : isEye && isShowPassword
            ? "text"
            : type
        }
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        readOnly
        onFocus={(e) => e.target.removeAttribute("readonly")}
      />
      {isEye && (
        <div
          style={{ opacity: !isShowPassword ? 0.4 : 1 }}
          className={styles.eye}
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          <CustomImage
            src="/assets/auth/eye.svg"
            alt="eye"
            width={19}
            height={16}
          />
        </div>
      )}
    </div>
  );
};

export default AuthInput;
