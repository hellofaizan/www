import React from "react";
import { InfiniteMovingLogos } from "~/components/movinglogos";

export default function Skills() {
  const stack = [
    {
      logo: "/techlogos/typescript.svg",
      name: "TypeScript",
    },
    {
      logo: "/techlogos/javascript.svg",
      name: "JavaScript",
    },
    {
      logo: "/techlogos/java.svg",
      name: "Java",
    },
    {
      logo: "/techlogos/kotlin.svg",
      name: "Kotlin",
    },
    {
      logo: "/techlogos/python.svg",
      name: "Python",
    },
    {
      logo: "/techlogos/android-icon.svg",
      name: "Android Development",
    },
    {
      logo: "/techlogos/react.svg",
      name: "React",
    },
    {
      logo: "/techlogos/mysql.svg",
      name: "MySQL",
    },
    {
      logo: "/techlogos/nestjs.svg",
      name: "Nest JS",
    },
    {
      logo: "/techlogos/nuxt.svg",
      name: "Nuxt",
    },
    {
      logo: "/techlogos/angular.svg",
      name: "Angular",
    },
    {
      logo: "/techlogos/c++.svg",
      name: "C++",
    },
    {
      logo: "/techlogos/dart.svg",
      name: "Dart",
    },
    {
      logo: "/techlogos/django.svg",
      name: "Django",
    },
    {
      logo: "/techlogos/hono.svg",
      name: "Hono",
    },
    {
      logo: "/techlogos/rust.svg",
      name: "Rust",
    },
    {
      logo: "/techlogos/flutter.svg",
      name: "Flutter",
    },
    {
      logo: "/techlogos/gitlab.svg",
      name: "Gitlab",
    },

    {
      logo: "/techlogos/tailwindcss.svg",
      name: "Tailwind CSS",
    },
    {
      logo: "/techlogos/nodejs.svg",
      name: "Node.js",
    },
    {
      logo: "/techlogos/mongodb.svg",
      name: "MongoDB",
    },
    {
      logo: "/techlogos/graphql.svg",
      name: "GraphQL",
    },
    {
      logo: "/techlogos/firebase.svg",
      name: "Firebase",
    },
    {
      logo: "/techlogos/git.svg",
      name: "Git",
    },
    {
      logo: "/techlogos/lemonsqueezy.svg",
      name: "LemonSqueezy",
    },
    {
      logo: "/techlogos/reactquery.svg",
      name: "React Query",
    },
    {
      logo: "/techlogos/materialui.svg",
      name: "Material UI",
    },
    {
      logo: "/techlogos/redis.svg",
      name: "Redis",
    },
    {
      logo: "/techlogos/postgresql.svg",
      name: "PostgreSQL",
    },
  ];

  const otherStack = [
    {
      logo: "/techlogos/blender.svg",
      name: "Blender",
    },
    {
      logo: "/techlogos/figma.svg",
      name: "Figma",
    },
    {
      logo: "/techlogos/djs.svg",
      name: "Discord JS",
    },
    {
      logo: "/techlogos/supabase.svg",
      name: "Supabase",
    },
    {
      logo: "/techlogos/vim.svg",
      name: "Vim",
    },
    {
      logo: "/techlogos/photoshop.svg",
      name: "Photoshop",
    },
    {
      logo: "/techlogos/docusaurus.svg",
      name: "Docusaurus",
    },
    {
      logo: "/techlogos/digitalocean.svg",
      name: "Digital Ocean",
    },
    {
      logo: "/techlogos/cloudflare.svg",
      name: "Cloudflare",
    },
    {
      logo: "/techlogos/bun.svg",
      name: "Bun",
    },
    {
      logo: "/techlogos/after-effects.svg",
      name: "After Effects",
    },
    {
      logo: "/techlogos/hugging_face.svg",
      name: "Hugging Face",
    },
    {
        logo: "/techlogos/premiere.svg",
        name: "Premiere Pro",
      },
    {
      logo: "/techlogos/intellijidea.svg",
      name: "IntelliJ Idea",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <InfiniteMovingLogos
        items={stack}
        direction="left"
        pauseOnHover={false}
        speed="slow"
      />
      <InfiniteMovingLogos
        items={otherStack}
        direction="right"
        pauseOnHover={false}
        speed="fast"
      />
    </div>
  );
}
