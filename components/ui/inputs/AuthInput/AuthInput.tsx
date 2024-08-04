"use client";

import React, {
  ChangeEvent,
  FC,
  ForwardedRef,
  forwardRef,
  useState,
} from "react";
import styles from "./AuthInput.module.scss";
import CustomImage from "../../images/CustomImage/CustomImage";
import { UseFormRegisterReturn } from "react-hook-form";

type AuthInputProps = {
  type: string;
  value?: string;
  placeholder: string;
  isEye?: boolean;
  register?: UseFormRegisterReturn<string>;
  borderError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  (
    {
      type,
      value,
      placeholder,
      isEye,
      register,
      borderError,
      onChange,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          style={{ borderBottom: borderError ? "1px solid red" : "" }}
          type={
            isEye && !isShowPassword
              ? type
              : isEye && isShowPassword
              ? "text"
              : type
          }
          {...register}
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
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
