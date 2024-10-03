import Image from "next/image";
import Link from "next/link";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./mdxcomponents/callout";
import { Youtube } from "./mdxcomponents/youtube";
import Spotify from "./mdxcomponents/Spotify";
import { cn } from "~/lib/utils";
import CodeBlockWithCopy from "./mdxcomponents/coptCode";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  Youtube,
  Spotify,
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-3xl tracking-tight italic text-muted-foreground font-bold",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: any) => {
    const hasImage =
      props.children &&
      Array.isArray(props.children) &&
      props.children.some((child: any) => child.type);

    if (hasImage) {
      return (
        <Link
          className={cn(
            "inline-flex items-center gap-1 font-medium underline decoration-dashed hover:text-blue-500 underline-offset-4",
            className
          )}
          {...props}
        >
          {props.children.map((child: any, index: number) => {
            if (child.type) {
              return (
                <Image
                  key={index}
                  src={child.props.src}
                  alt={child.props.alt}
                  width={25}
                  height={25}
                  className="inline-block"
                />
              );
            }
            return child;
          })}
        </Link>
      );
    }

    return (
      <Link
        className={cn(
          "inline-flex items-center gap-1 font-medium underline decoration-dashed hover:text-blue-500 underline-offset-4",
          className
        )}
        {...props}
      />
    );
  },
  p: ({ className, ...props }: any) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul
      className={cn("my-2 ml-4 list-inside list-disc", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: any) => (
    <ol
      className={cn("my-2 ml-4 list-inside list-decimal", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-6" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, children, ...props }: any) => {
    const code = children?.props?.children || "";

    return (
      <CodeBlockWithCopy code={code} className={className}>
        <pre
          className={cn(
            "my-2 overflow-x-auto rounded-lg border py-2 bg-muted/65",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </CodeBlockWithCopy>
    );
  },
  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  inlineCode: (props: any) => (
    <code className="rounded bg-muted p-1 text-sm" {...props} />
  ),
  strong: (props: any) => <strong className="font-bold" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  del: (props: any) => <del className="line-through" {...props} />,
};

interface MDXComponentProps {
  code: string;
}

export function MDXComponent({ code }: MDXComponentProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
