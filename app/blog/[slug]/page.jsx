// "use client";

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  // const router = useRouter();

  return (
    <div className="detail">
      <div className="detail__header">
        <h1 className="detail__header__title">{post.data.title}</h1>
      </div>
      <article className="detail__content">
        <Markdown>{post.content}</Markdown>
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
            {format(new Date(post.data.date), "dd.MM.yyyy")}
          </span>
        </div>
      </div>
      <button
        className="detail__button"
        // onClick={() => router.back()}
        aria-label="Back to articles">
        <span>Back to articles</span>
      </button>
    </div>
  );
};

export default PostPage;

