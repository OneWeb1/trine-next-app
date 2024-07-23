import React from "react";
import styles from "./ModalWithDrawalBalance.module.scss";

import Modal from "../Modal";

const ModalWithDrawalBalance = () => {
  return (
    <Modal title="Виведення коштів">
      <div className={styles.box}>
        <div className={styles.boxContainer}>
          <div className={styles.text}>
            Для виведення коштів, звяжіться з менеджером, вкажіть суму яку
            хочете вивести та ID свого облікового запису
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

export default ModalWithDrawalBalance;
