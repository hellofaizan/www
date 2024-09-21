import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface AboutMeProps {
  text: string;
}

interface ChildElement extends React.ReactElement {
  type: string;
  props: {
    src?: string;
    alt?: string;
  };
}

const isChildElement = (child: React.ReactNode): child is ChildElement => {
  return React.isValidElement(child) && typeof (child as any).type === "string";
};

export default function AboutMe(props: AboutMeProps) {
  return (
    <ReactMarkdown
      components={{
        a: ({ node, children, ...props }) => {
          const childrenArray = React.Children.toArray(children);

          const hasImage = childrenArray.some(
            (child) => isChildElement(child) && child.type === "img"
          );
          if (hasImage) {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-blue-500  decoration-dashed underline-offset-4"
                {...props}
              >
                {childrenArray.map((child, index) => {
                  if (isChildElement(child) && child.type === "img") {
                    return (
                      <Image
                        key={index}
                        src={child.props.src || ""}
                        alt={child.props.alt || ""}
                        width={20}
                        height={20}
                        className="w-4 h-4"
                      />
                    );
                  }
                  return child;
                })}
              </a>
            );
          }
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500  decoration-dashed underline-offset-4"
              {...props}
            >
              {children}
            </a>
          );
        },
        p: ({ node, ...props }) => (
          <p
            className="dark:text-[rgb(192,192,192)] text-sm md:text-base"
            {...props}
          />
        ),
        ul: ({ node, ...props }: any) => (
          <ul
            className={
              "ml-2 md:ml-3 list-inside list-disc dark:text-[rgb(192,192,192)] text-sm md:text-lg"
            }
            {...props}
          />
        ),
        li: ({ node, ...props }: any) => <li className={"mt-1"} {...props} />,
      }}
    >
      {props.text}
    </ReactMarkdown>
  );
}
