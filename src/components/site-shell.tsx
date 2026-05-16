"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "~/components/sidebar";
import Footer from "~/components/footer";
import Hire from "~/components/hire";
import { Navbar } from "~/components/nav";
import { Separator } from "~/components/ui/separator";
import { SidebarProvider } from "~/components/ui/sidebar";
import { Toaster } from "~/components/ui/sonner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isResume = pathname === "/resume";

  if (isResume) {
    return (
      <div className="h-svh w-full overflow-hidden">
        {children}
        <Toaster />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="container mx-auto flex w-full min-w-0 flex-auto flex-col px-0 pb-6 md:max-w-3xl md:pb-8 md:pt-14">
        <div className="flex flex-1 flex-col">
          <Navbar />
          <div className="px-5 md:px-0">{children}</div>
          <div className="mt-7 flex flex-col gap-2 px-5 md:px-0">
            <Hire />
            <Separator className="my-5 w-full bg-muted-foreground/35" />
            <Footer />
          </div>
          <Toaster />
        </div>
      </div>
    </SidebarProvider>
  );
}
