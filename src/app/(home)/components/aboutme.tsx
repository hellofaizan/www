import React from "react";

interface AboutMeProps {
  text: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div className="w-full text-sm md:text-base">
      <p className="text-[rgb(192,192,192)]">{props.text}</p>
    </div>
  );
}
