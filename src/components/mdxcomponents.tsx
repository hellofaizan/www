import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./mdx/callout";
import { Youtube } from "./mdx/youtube";
import Spotify from "./mdx/Spotify";
import Link from "next/link";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  Youtube,
  Spotify,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
