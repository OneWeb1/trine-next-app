import React from "react";
import styles from "./ModalChangeAvatar.module.scss";
import Modal from "../Modal";
import Image from "next/image";
import clsx from "clsx";

const avatarUrl = "https://trine-game.online/avatar/";
const avatarNames = ["0", "1", "2", "3", "4", "5", "a1", "a2", "a3"];

const ModalChangeAvatar = () => {
  return (
    <Modal
      title="Змінити аватарку"
      isButtonsGroup={true}
      buttonValues={["Зберегти", "Відмінити"]}
    >
      <div className={styles.avatars}>
        {avatarNames.map((name, idx) => {
          return (
            <div
              key={idx}
              className={clsx(styles.avatar, !idx && styles.currentAvatar)}
            >
              <Image
                src={`https://trine-game.online/avatar/${name}`}
                width={60}
                height={60}
                alt="avatar"
              />
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default ModalChangeAvatar;
