import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div className="container__item">
      <h2>
        <Link href={`/blog/${props.slug}`}>{props.title}</Link>
      </h2>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

export default PostPreview;


