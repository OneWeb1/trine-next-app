import React, { FC, ReactNode } from "react";
import styles from "./GlobalGreenButton.module.scss";

type GlobalGreenButtonProps = {
  children: ReactNode;
  width: string;
  height: string;
};

const GlobalGreenButton: FC<GlobalGreenButtonProps> = ({
  children,
  width,
  height,
}) => {
  return (
    <button style={{ width, height }} className={styles.globalGreenButton}>
      <div className={styles.bottomLine}></div>
      <div className={styles.value}>{children}</div>
    </button>
  );
};

export default GlobalGreenButton;
