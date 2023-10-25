import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

function Blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div className="">{postPreviews}</div>;
}

export default Blog;

