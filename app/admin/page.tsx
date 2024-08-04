import React from "react";
import styles from "./page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const Admin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ mode: "onTouched" });

  return (
    <div className={styles.admin}>
      <div className={styles.screen}>
        <HeaderAdmin />
        <div style={{ marginTop: "80px" }}></div>
        <form style={{ color: "#fff", textAlign: "center" }}>
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input type="email" />
            <div style={{ color: "red" }}>Error</div>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
            <div style={{ color: "red" }}>Error</div>
          </div>

          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
