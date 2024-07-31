 import React from "react";
 import styles from "./page.module.scss";
 import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";

const Admin = () => {
   return (
     <div className={styles.admin}>
       <div className={styles.screen}>
         <HeaderAdmin />
       </div>
     </div>
   );
 };

 export default Admin;
