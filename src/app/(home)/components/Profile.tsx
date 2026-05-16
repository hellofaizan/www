import Image from "next/image";
import Online from "../../../components/online";

export default function Profile() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 p-[2px]">
          <Image
            src="/hellofaizan.png"
            width={80}
            height={80}
            alt="Mohammad Faizan"
            className="h-14 w-14 rounded-full bg-background md:h-20 md:w-20"
          />
        </div>
        <Online />
      </div>
      <div className="flex min-w-0 flex-col gap-0.5">
        <h1 className="text-balance text-2xl font-bold tracking-tight md:text-4xl">
          Mohammad Faizan
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          NIT Srinagar &apos;29 · Full-stack & AI builder
        </p>
      </div>
    </div>
  );
}
