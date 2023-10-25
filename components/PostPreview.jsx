import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div className="">
      <p className="">{props.date}</p>

      <Link href={`/blog/${props.slug}`}>
        <h2 className="">{props.title}</h2>
      </Link>
      <p className="">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;

