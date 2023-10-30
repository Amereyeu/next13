import Link from "next/link";

export default function CategoryList() {
  const categories = ["html", "mdx", "javascript"];

  return (
    <div className="allcategories">
      <ul>
        {categories.map((category, i) => (
          <li key={i}>
            <Link
              href={`/blog-mdx/category/${category}`}
              className="allcategories__link">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

