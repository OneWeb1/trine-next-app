"use client";

import { CSSProperties, FC, useState } from "react";

import styles from "./CustomImage.module.scss";
import Image from "next/image";
import { clsx } from "clsx";

type CustomImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

const CustomImage: FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
}) => {
  const [loading, setLoading] = useState(true);

  const handleCustomImageLoad = () => {
    setLoading(false);
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={handleCustomImageLoad}
      className={className}
      style={style}
      priority
      loading="eager"
    />
  );
};

export default CustomImage;
