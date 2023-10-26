import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="">
      <div className="container">
        {blogs.map((blog) => (
          <div className="container__item">
            <h2>
              <Link href={`/blog-mdx/${blog.slug}`} passHref key={blog.slug}>
                {blog.meta.title}
              </Link>
            </h2>
            <h3>{blog.meta.description}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

