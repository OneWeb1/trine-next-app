"use client";

import React, { FC, useEffect } from "react";
import styles from "./RoomsView.module.scss";
import CustomImage from "../ui/images/CustomImage/CustomImage";
import useRoomsStore from "@/app/store/RoomsStore";
import { CirclesWithBar } from "react-loader-spinner";

type RoomsViewProps = {
  roomClick?: () => void;
};

const RoomsView: FC<RoomsViewProps> = ({ roomClick }) => {
  const {
    rooms: { items },
    loading,
    error,
    getRoomsData,
  } = useRoomsStore();
  const ns = ["Green", "Blue", "Violet"];

  useEffect(() => {
    getRoomsData();
  }, []);

  return (
    <div className={styles.roomsView}>
      <div className={styles.roomsHeader}>Лобби</div>

      <div className={styles.rooms}>
        {loading && (
          <div
            style={{
              width: "100%",
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CirclesWithBar
              height="60"
              width="60"
              color="#4fa94d"
              outerCircleColor="#4fa94d"
              innerCircleColor="#4fa94d"
              barColor="#4fa94d"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {items?.map((room, i) => (
          <>
            <div
              className={styles.room}
              onClick={roomClick ? roomClick : () => {}}
            >
              <CustomImage
                src="/assets/rooms/image.svg"
                alt="image"
                width={93}
                height={90}
              />
              <div className={styles.rightWrapper}>
                <div
                  className={`${styles.titleWrapper} ${
                    styles["titleWrapper" + ns[i % 3]]
                  }`}
                >
                  <div className={styles.title}>{room.name}</div>
                </div>
                <div className={styles.info}>
                  <div className={styles.leftChild}>
                    <span className={styles.label}>
                      макс. сума ставки{" "}
                      <span style={{ color: "#fff" }}>{room.max_bid}₴</span>
                    </span>
                    <div className={styles.playersInfo}>
                      <CustomImage
                        src="/assets/rooms/user.svg"
                        alt="image"
                        width={14}
                        height={14}
                      />
                      0/{room.max_players}
                    </div>
                  </div>
                  <div className={styles.rightChild}>
                    <span className={styles.label}>мин. сума входу</span>
                    <div className={styles.price}>{room.join_tax}₴</div>
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
