import React from "react";
import ReactMarkdown from "react-markdown";

interface AboutMeProps {
  text: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <ReactMarkdown
      components={{
        // This will make sure links open in a new tab
        a: ({ node, ...props }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500  decoration-dashed underline-offset-4"
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p
            className="text-[rgb(192,192,192)] text-sm md:text-base"
            {...props}
          />
        ),
      }}
    >
      {props.text}
    </ReactMarkdown>
  );
}
