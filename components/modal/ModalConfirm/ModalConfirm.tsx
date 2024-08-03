import React from "react";
import styles from "./ModalConfirm.module.scss";
import Modal from "../Modal";

import useModalsStore from "../store";

const ModalConfirm = () => {
  const { confirmText, confirmHandlers } = useModalsStore((state) => state);

  return (
    <Modal
      title="Підтвердження дії"
      isButtonsGroup={true}
      buttonValues={["Підтвердити", "Відмінити"]}
      handlers={confirmHandlers}
    >
      <div className={styles.boxContainer}>
        <div className={styles.text}>{confirmText}</div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
