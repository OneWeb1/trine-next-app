import React, { CSSProperties, FC, ReactNode } from "react";
import styles from "./GlobalGreenButton.module.scss";
import { clsx } from "clsx";

type GlobalGreenButtonProps = {
  children: ReactNode;
  width: string;
  height: string;
  disabled?: boolean;
  type?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const GlobalGreenButton: FC<GlobalGreenButtonProps> = ({
  children,
  width,
  height,
  disabled,
  type,
  style,
  onClick,
}) => {
  return (
    <button
      type={"submit"}
      style={{ width, height, ...style }}
      className={clsx(
        styles.globalGreenButton,
        disabled ? styles.disabled : ""
      )}
      onClick={onClick}
    >
      <div className={styles.bottomLine}></div>
      <div className={styles.value}>{children}</div>
    </button>
  );
};

export default GlobalGreenButton;
