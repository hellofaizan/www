import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  key: number;
  title: string;
  description?: string;
  logo: string;
  link?: string;
  status?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link
      href={props.link || "/"}
      className="bg-[#ffffff0d] rounded-md overflow-hidden p-4"
    >
      <div className="flex items-center gap-2">
        <div className="bg-[#a0a0a014] w-[70px] h-[70px] rounded-lg flex items-center justify-center">
          <Image
            src={props.logo}
            alt={props.title}
            className="w-12 h-12"
            height={45}
            width={45}
          />
        </div>
        <div className="flex-1 flex flex-col items-start gap-1">
          <div className="flex gap-2 items-center overflow-hidden flex-1">
            <p className="text-2xl font-semibold">{props.title}</p>
            {props.status && (
              <span className="text-xs bg-[#ffffff0d] px-2 border border-[#5757576e] rounded-md">
                {props.status}
              </span>
            )}
          </div>
          <div className="flex-1">
            {props.description && (
              <p className="text-xs text-[#ffffffa0]">{props.description}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}