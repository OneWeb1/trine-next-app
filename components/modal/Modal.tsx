"use client";

import React, { Children, FC, ReactNode, useState } from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";

import useModalsStore from "./store";

type ModalProps = {
  children: ReactNode;
  title?: string;
};

const Modal: FC<ModalProps> = ({ children, title }) => {
  const modalsStore = useModalsStore((state) => state);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const close = () => {
    setIsClosed(true);

    setTimeout(() => {
      modalsStore.removeOpenModal();
    }, 60);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.closeWrapper} onClick={close}></div>
      <div className={`${styles.modal} ${isClosed ? styles.hide : ""}`}>
        <div className={styles.header}>
          <div className={styles.topLine}></div>
          <div className={styles.title}>{title}</div>
          <div className={styles.btnClose} onClick={close}>
            <Image
              src="/assets/modal/btnCloseBox.svg"
              alt="box"
              width={32}
              height={32}
            />
            <div className={styles.icon}>
              <Image
                src="/assets/modal/close.svg"
                alt="box"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.boxWrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
