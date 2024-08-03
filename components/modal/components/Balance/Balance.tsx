import CustomImage from "@/components/ui/images/CustomImage/CustomImage";
import React, { FC } from "react";

type BalanceProps = {
  value: number | string;
};

const Balance: FC<BalanceProps> = ({ value }) => {
  return (
    <>
      <CustomImage
        style={{ marginRight: "3px" }}
        src="/assets/home/money.svg"
        width={12}
        height={12}
        alt="image"
      />
      {value}
    </>
  );
};

export default Balance;
