import React, { FC } from "react";
import styles from "./NextBox.module.scss";
import Image from "next/image";

type NextBoxProps = {
  option: string;
  onClick?: () => void;
};

const NextBox: FC<NextBoxProps> = ({ option, onClick }) => {
  return (
    <div className={styles.nextBox} onClick={onClick}>
      <div className={styles.option}>{option}</div>
      <Image
        src="/assets/modal/arrowNext.svg"
        alt="next"
        width={26}
        height={26}
      />
    </div>
  );
};

export default NextBox;
