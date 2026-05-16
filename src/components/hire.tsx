import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import EmailForm from "./emailform";

export default function Hire() {
  return (
    <div className="overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/5 p-5 md:p-6">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-lg font-semibold tracking-tight md:text-xl">
            Want to hire me as a freelancer?
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Drop your message and let&apos;s discuss your project.
          </p>
        </div>
        <Button asChild className="w-fit rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a]">
          <Link
            href="https://api.whatsapp.com/send?phone=916005131341"
            target="_blank"
            rel="noopener noreferrer"
            data-sln-event="user: WhatsApp button clicked"
          >
            Chat on WhatsApp
          </Link>
        </Button>
        <Separator className="bg-border/60" />
        <div>
          <p className="text-sm font-medium">Or leave your email</p>
          <p className="mb-3 text-xs text-muted-foreground">
            I&apos;ll get back to you as soon as I can.
          </p>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
