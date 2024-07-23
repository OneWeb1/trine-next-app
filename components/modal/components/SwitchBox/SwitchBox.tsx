import React, { FC } from "react";
import styles from "./SwitchBox.module.scss";
import CheckboxSettings from "@/components/ui/checkboxes/CheckboxSettings/CheckboxSettings";

type SwitchBoxProps = {
  option: string;
  value: boolean;
  onClick?: () => void;
};

const SwitchBox: FC<SwitchBoxProps> = ({ option, value, onClick }) => {
  return (
    <div className={styles.switchBox} onClick={onClick}>
      <div className={styles.option}>{option}</div>
      <CheckboxSettings enable={value} />
    </div>
  );
};

export default SwitchBox;
