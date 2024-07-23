import React from "react";
import styles from "./ModalBalanceReplenishment.module.scss";

import Modal from "../Modal";

const ModalBalanceReplenishment = () => {
  return (
    <Modal title="Поповнення балансу">
      <div className={styles.box}>
        <div className={styles.boxContainer}>
          <div className={styles.text}>
            Для поповнення рахунку, звяжіться з менеджером, вкажіть суму на яку
            хочете поповнити рахунок та ID свого облікового запису
          </div>
        </div>

        <div style={{ marginTop: "45px" }}></div>
        <div className={styles.bottomLine}>
          <div className={styles.lineText}>Написати менеджеру</div>
          <button className={styles.btn}>Перейти</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBalanceReplenishment;
