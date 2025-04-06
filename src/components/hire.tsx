import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import EmailForm from "./emailform";
export default function Hire() {
  return (
    <div className="border p-4 w-full rounded-sm bg-blue-400/10 dark:bg-[#a0a0a014] border-blue-400/30 dark:border-muted overflow-hidden">
      <div className="flex items-start flex-col">
        <p className="text-xl font-bold">
          Want to hire me as a freelancer?
        </p>
        <p className="text-sm">
          Drop your message and let's discuss about your project.
        </p>
        <Link
          href={"https://api.whatsapp.com/send?phone=916005131341"}
          target="_blank"
          className="px-2 rounded-md bg-green-400 py-1 text-sm font-bold mt-1 text-black"
        >
          Chat on WhatsApp
        </Link>
        <Separator className="w-full my-7 bg-muted-foreground/35" />
        <p className="">Drop in your email ID and I will get back to you.</p>
        <EmailForm />
      </div>
    </div>
  );
}
