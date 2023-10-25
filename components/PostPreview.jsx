import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div className="item">
      <h2 className="">
        <Link href={`/blog/${props.slug}`}>{props.title}</Link>
      </h2>
      <h3 className="">{props.subtitle}</h3>
    </div>
  );
};

export default PostPreview;


