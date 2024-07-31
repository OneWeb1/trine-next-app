import React, { FC, ReactNode } from "react";
import styles from "./AdminNavigation.module.scss";
import Image from "next/image";

type AdminNavigationProps = {
  title: string;
  children: ReactNode;
};

const AdminNavigationButton: FC<{ src: string }> = ({ src }) => {
  return (
    <div className={styles.button}>
      <Image src={src} alt="image" width={15} height={15} />
    </div>
  );
};

const AdminNavigationCustomButton: FC<{ children: ReactNode; src: string }> = ({
  children,
  src,
}) => {
  return (
    <div className={styles.customButton}>
      <Image src={src} alt="image" width={15} height={15} /> {children}
    </div>
  );
};

const AdminNavigation: FC<AdminNavigationProps> = ({ title, children }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>{children}</div>
    </div>
  );
};

export default AdminNavigation;

export { AdminNavigationButton, AdminNavigationCustomButton };
