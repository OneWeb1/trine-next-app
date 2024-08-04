import React from "react";
import styles from "./page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";

interface FormData {
  email: string;
  password: string;
}

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.screen}>
        <HeaderAdmin />
        <div style={{ marginTop: "80px" }}></div>
      </div>
    </div>
  );
};

export default Admin;
