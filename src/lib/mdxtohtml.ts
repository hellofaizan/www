import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse as any)
    .use(remarkRehype as any, { allowDangerousHtml: true })
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify as any)
    .use(rehypeAutoLinkHeadings, {
      behavior: "wrap",
      properties: {
        className: ["subheading-anchor"],
        arialLabel: "Link to section",
      },
    })
    .process(markdown);

  return String(result);
}
