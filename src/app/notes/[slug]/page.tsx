import { Separator } from "~/components/ui/separator";
import { MDXComponent } from "~/components/mdxcomponent";
import "~/styles/mdx.css";
import { notes } from "#site/content";
import Link from "next/link";
import { ArrowBigLeft, ArrowUpRight, Calendar, User2 } from "lucide-react";

interface ParamsProps {
  params: {
    slug: string;
  };
}

async function getNotesFromParams(params: ParamsProps["params"]) {
  const slug = params.slug;
  const post = notes.find((post) => post.slug === `notes/${slug}`);
  return post;
}

export async function generateStaticParams(): Promise<ParamsProps["params"][]> {
  return notes.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: ParamsProps) {
  const post = await getNotesFromParams(params);

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

      <div className="flex flex-col gap-2 overflow-hidden mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.description && (
          <p className="text-lg text-muted-foreground">{post.description}</p>
        )}
        <Separator className="my-4" />
        <MDXComponent code={post.body} title={post.title} /> {/* Pass the title */}
      </div>
    </article>
  );
}
