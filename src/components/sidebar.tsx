import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import {
  Calendar,
  ChevronUp,
  Globe2,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { Separator } from "./ui/separator";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Inbox,
  },
  {
    title: "Notes",
    url: "/notes",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hellofaizaan/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    link: "https://github.com/hellofaizan",
    icon: "github",
  },
  {
    name: "Peerlist",
    link: "https://peerlist.io/hellofaizan",
    icon: "peerlist",
  },
  {
    name: "X/Twitter",
    link: "https://x.com/curiousfaizaan",
    icon: "x",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hellofaizaan",
    icon: "instagram",
  },
];

export function AppSidebar() {
  const socialIcons = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return <IconBrandLinkedin className="hover:scale-105" />;
      case "github":
        return <IconBrandGithub className="hover:scale-105" />;
      case "x":
        return <IconBrandX className="hover:scale-105" />;
      case "instagram":
        return <IconBrandInstagram className="hover:scale-105" />;
      case "facebook":
        return <IconBrandFacebook className="hover:scale-105" />;
      case "peerlist":
        return (
          <img
            className="ml-1 h-[20px] w-[20px] hover:scale-105 grayscale hover:grayscale-0"
            src="/companylogo/peerlistlogo.svg"
            alt=""
          />
        );
      default:
        return <Globe2 />;
    }
  };

  return (
    <div className="md:hidden">
      <Sidebar className="bg-gray-800 text-gray-300">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className="flex items-center gap-2 hover:bg-muted"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex col-span-3 flex-col gap-1">
            {socials.map((social) => (
              <Link
                className="flex items-baseline gap-2 text-muted-foreground hover:dark:text-[rgb(192,192,192)] hover:text-muted-foreground text-[#2f2f2f] dark:text-muted-foreground"
                href={social.link}
                target="_blank"
                key={social.name}
              >
                <span className="font-medium">{social.name}</span>
                <Separator className="flex-1" />
                {socialIcons(social.icon)}
              </Link>
            ))}
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
