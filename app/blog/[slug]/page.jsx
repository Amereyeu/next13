import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

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
  return (
    <article>
      <div className="header">
        <h1 className="header__title">{post.data.title}</h1>
        <p className="header__date">{post.data.date}</p>
      </div>

      <div className="content">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
};

export default PostPage;

