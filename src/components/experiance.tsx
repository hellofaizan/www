import Image from "next/image";
import React from "react";

interface ExperianceProps {
  title: string;
  logo: string;
  description: string;
  startDate: string;
  endDate: string;
}

export default function Experiance({
  title,
  logo,
  description,
  startDate,
  endDate,
}: ExperianceProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt={title}
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">{`${startDate} - ${endDate}`}</p>
    </div>
  );
}
