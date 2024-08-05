import React, { useState } from "react";
import styles from "./ModalChangeAvatar.module.scss";
import Modal from "../Modal";

import clsx from "clsx";
import CustomImage from "@/components/ui/images/CustomImage/CustomImage";
import useModalsStore from "../store";
import useUserStore from "@/app/store/userStore";
import { profile } from "console";

const avatarUrl = "https://trine-game.online/avatar/";

const ModalChangeAvatar = () => {
  const { profile, avatars, changeAvatar } = useUserStore((state) => state);

  const currentAvatarId = profile?.avatar_id || "0";
  const [selectAvatarId, setSelectAvatarId] = useState<string>(currentAvatarId);

  const changeAvatarHandler = () => {
    changeAvatar(selectAvatarId);
  };

  return (
    <Modal
      title="Змінити аватарку"
      isButtonsGroup={true}
      buttonValues={["Зберегти", "Відмінити"]}
      handlers={[changeAvatarHandler]}
    >
      <div className={styles.avatars}>
        {avatars.map((name, idx) => {
          return (
            <div
              key={idx}
              className={clsx(
                styles.avatar,
                name === currentAvatarId && styles.currentAvatar,
                name === selectAvatarId && styles.selectAvatar
              )}
              onClick={() => setSelectAvatarId(name)}
            >
              <CustomImage
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
