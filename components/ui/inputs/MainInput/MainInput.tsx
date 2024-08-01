import React, { ChangeEvent, CSSProperties, FC } from "react";
import styles from "./MainInput.module.scss";

type MainInputProps = {
  type?: string;
  value?: string;
  placeholder?: string;
  style?: CSSProperties;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MainInput: FC<MainInputProps> = ({
  type,
  value,
  placeholder,
  style,
  onChange,
}) => {
  return (
    <div style={{ background: "#2c2f38", ...style }}>
      <input
        type={!type ? "text" : type}
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default MainInput;
