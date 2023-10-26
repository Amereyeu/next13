import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import langHttp from "highlight.js/lib/languages/http";
import langNginx from "highlight.js/lib/languages/nginx";
import { format } from "date-fns";
import Link from "next/link";

import { MDXRemote } from "next-mdx-remote/rsc";
import Button from "@/components/mdx/Button";
import Yt from "@/components/mdx/Yt";
import CustomLink from "@/components/mdx/CustomLink";

import "@/styles/highlight-js/atom.css";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      { languages: { http: langHttp, nginx: langNginx } },
    ],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
    date: blog.frontMatter.date
  };
}

export default function Post({ params }) {
  const props = getPost(params);

  return (
    <div className="detail">
      <div className="detail__header">
        <h1 className="detail__header__title">{props.frontMatter.title}</h1>
      </div>

      <article className="detail__content">
        <MDXRemote
          source={props.content}
          components={{ Button, Yt, a: CustomLink }}
          options={options}
        />
      </article>

      <div className="detail__categories">
        <h2 className="detail__categories__header">Published in:</h2>

        <div className="detail__categories__content">
          {/* {data.post.categories.edges.length !== 0 && (
            <ul>
              {data.post.categories.edges.map((cat) => (
                <li key={cat.node.id}>
                  <Link
                    className="detail__categories__content__link"
                    href={`/blog/category/${cat.node.slug}`}>
                    {cat.node.name}
                  </Link>
                </li>
              ))}
            </ul>
          )} */}

          <span className="detail__categories__content__date">
            {/* {format(new Date(props.frontMatter.date), "dd.MM.yyyy")} */}
          </span>
        </div>
      </div>

      <Link href="/blog/" className="detail__button">
        <span>Back to articles</span>
      </Link>
    </div>
  );
}



