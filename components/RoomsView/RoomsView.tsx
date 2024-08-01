"use client"

import React, { FC } from "react";
import styles from "./RoomsView.module.scss";
import Image from "next/image";

type RoomsViewProps = {
  roomClick?: () => void;
};

const RoomsView: FC<RoomsViewProps> = ({ roomClick }) => {
  const ns = [
    "Green",
    "Green",
    "Green",
    "Blue",
    "Blue",
    "Blue",
    "Violet",
    "Violet",
    "Violet",
  ];
  console.log({ roomClick });

  return (
    <div className={styles.roomsView}>
      <div className={styles.roomsHeader}>Лобби</div>
      <div className={styles.rooms}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <>
            <div
              className={styles.room}
              onClick={roomClick ? roomClick : () => {}}
            >
              <Image
                src="/assets/rooms/image.svg"
                alt="image"
                width={93}
                height={90}
              />
              <div className={styles.rightWrapper}>
                <div
                  className={`${styles.titleWrapper} ${
                    styles["titleWrapper" + ns[i]]
                  }`}
                >
                  <div className={styles.title}>Чірік</div>
                </div>
                <div className={styles.info}>
                  <div className={styles.leftChild}>
                    <span className={styles.label}>
                      макс. сума ставки{" "}
                      <span style={{ color: "#fff" }}>20₴</span>
                    </span>
                    <div className={styles.playersInfo}>
                      <Image
                        src="/assets/rooms/user.svg"
                        alt="image"
                        width={14}
                        height={14}
                      />
                      0/11
                    </div>
                  </div>
                  <div className={styles.rightChild}>
                    <span className={styles.label}>мин. сума входу</span>
                    <div className={styles.price}>10₴</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RoomsView;
