import React, { FC, ReactNode } from "react";
import styles from "./BeetwenBox.module.scss";
import Image from "next/image";

type BeetwenBoxProps = {
  option: string;
  value: string | ReactNode;
};

const BeetwenBox: FC<BeetwenBoxProps> = ({ option, value }) => {
  return (
    <div className={styles.beetwenBox}>
      <div className={styles.option}>{option}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default BeetwenBox;
