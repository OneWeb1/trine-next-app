"use client";

import React, { useState } from "react";
import styles from "./ModalCreateRoom.module.scss";
import Modal from "../Modal";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalCreateRoom = () => {
  const [roomName, setRoomName] = useState<string>("");
  const [playersNumber, setPlayersNumber] = useState<string>("");
  const [startBet, setStartBet] = useState<string>("");
  const [maxBet, setMaxBet] = useState<string>("");

  return (
    <Modal
      title="Створити кімнату"
      isButtonsGroup={true}
      buttonValues={["Створити", "Відмінити"]}
    >
      <div className={styles.boxContainer}>
        <MainInput
          style={{ marginBottom: "15px" }}
          placeholder="Ім`я кімнати"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <MainInput
          type="number"
          style={{ marginBottom: "15px" }}
          placeholder="Кількість гравців"
          value={playersNumber}
          onChange={(e) => setPlayersNumber(e.target.value)}
        />
        <MainInput
          type="number"
          style={{ marginBottom: "15px" }}
          placeholder="Сума початкової ставки"
          value={startBet}
          onChange={(e) => setStartBet(e.target.value)}
        />
        <MainInput
          type="number"
          placeholder="Сума максиимальної ставки"
          value={maxBet}
          onChange={(e) => setMaxBet(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalCreateRoom;
