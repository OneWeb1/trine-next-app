"use client";

import React, { FC, useState } from "react";
import styles from "./CheckboxSettings.module.scss";

type CheckboxSettingsProps = {
  enable: boolean;
};

const CheckboxSettings: FC<CheckboxSettingsProps> = ({ enable }) => {
  const [on, setOn] = useState<boolean>(false);

  return (
    <div className={styles.checkbox} onClick={() => setOn(!on)}>
      <div className={`${styles.childBox} ${!on ? styles.enableBg : ""}`}>
        <div
          className={`${styles.circle} ${on ? styles.enable : styles.disable}`}
        >
          <div className={styles.top}></div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxSettings;
