"use client";

import React, { Children, FC, ReactNode, useState } from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";

import useModalsStore from "./store";
import GlobalGreenButton from "../ui/buttons/GlobalGreenButton";

type ModalProps = {
  children: ReactNode;
  title?: string;
  isButtonsGroup?: boolean;
  buttonValues?: string[];
  handlers?: (() => void)[];
};

const Modal: FC<ModalProps> = ({
  children,
  title,
  isButtonsGroup,
  buttonValues,
  handlers,
}) => {
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
        <div
          style={{ paddingBottom: isButtonsGroup ? "0px" : "25px" }}
          className={styles.main}
        >
          <div className={styles.boxWrapper}>{children}</div>
          {isButtonsGroup && (
            <div className={styles.buttonsGroup}>
              <GlobalGreenButton
                style={{ fontSize: "18px" }}
                width="169px"
                height="46px"
              >
                {buttonValues && buttonValues[0]}
              </GlobalGreenButton>
              <GlobalGreenButton
                style={{ fontSize: "18px" }}
                width="169px"
                height="46px"
                onClick={
                  !handlers || (handlers && !handlers[1])
                    ? () => close()
                    : () => {}
                }
              >
                {buttonValues && buttonValues[1]}
              </GlobalGreenButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
