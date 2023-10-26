import Link from "next/link";

function tagMaker(tagList) {
  let alphabetizedTags = tagList.sort();
  return (
    <ul>
      {alphabetizedTags.map((tag) => (
        <li key={`${tag}-link`}>
          <Link className="detail__categories__content__link" href={`${tag}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const TagBlock = (props) => {
  if (!props.tags || !Array.isArray(props.tags)) return null;
  return tagMaker(props.tags);
};

export default TagBlock;

