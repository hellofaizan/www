import Image from "next/image";
import React from "react";

const GradientImage = ({ src, alt, width, height }: any) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
    </div>
  );
};

export default GradientImage;
