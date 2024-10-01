import { getPostBySlug } from "~/lib/mdx";
import markdownToHtml from "~/lib/mdxtohtml";
import Link from "next/link";
import { ArrowBigLeft, ArrowUpRight, Calendar, User2 } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { MDXContent } from "~/components/mdxcomponents";

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);
  if (!post || !post.published) {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <Link href="/notes">
            <p className="flex items-center gap-1 rounded-md p-1 hover:bg-muted/45">
              <ArrowBigLeft size={24} />
              <span>Back</span>
            </p>
          </Link>
          <p className="flex items-center gap-1">
            <Calendar size={20} />
            <span>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </p>
        </div>

        <h1 className="text-3xl font-bold text-muted-foreground">
          No Post Found
        </h1>
      </div>
    );
  }
  let content = "";
  if (post) content = await markdownToHtml(post?.content);

  return (
    <article className="flex flex-col gap-6">
      <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
        <Link href="/notes">
          <p className="flex items-center gap-1 rounded-md p-1 pr-3 hover:bg-muted/45">
            <ArrowBigLeft size={24} />
            <span>Back</span>
          </p>
        </Link>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-1">
            <Calendar size={20} />
            <span>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </p>
          {post.AuthorUrl ? (
            <Link
              href={post.AuthorUrl}
              className="hover:text-blue-500"
              target="_blank"
            >
              <p className="group flex items-center gap-1">
                <User2 size={16} />
                <span>{post.Author}</span>
                <ArrowUpRight size={16} className="hidden group-hover:block" />
              </p>
            </Link>
          ) : (
            <p className="flex items-center gap-1">
              <User2 size={16} />
              <span>{post.Author}</span>
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 overflow-hidden">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.description && (
          <p className="text-lg text-muted-foreground">{post.description}</p>
        )}
        <Separator className="my-4" />
        <div
          className="prose prose-sm sm:prose lg:prose-l prose-gray dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
};

export default PostLayout;
