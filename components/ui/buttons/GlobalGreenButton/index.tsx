import React, { CSSProperties, FC, ReactNode } from "react";
import styles from "./GlobalGreenButton.module.scss";

type GlobalGreenButtonProps = {
  children: ReactNode;
  width: string;
  height: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const GlobalGreenButton: FC<GlobalGreenButtonProps> = ({
  children,
  width,
  height,
  style,
  onClick,
}) => {
  return (
    <button
      style={{ width, height, ...style }}
      className={styles.globalGreenButton}
      onClick={onClick}
    >
      <div className={styles.bottomLine}></div>
      <div className={styles.value}>{children}</div>
    </button>
  );
};

export default GlobalGreenButton;
