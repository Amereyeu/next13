export default function Yt({ id }) {
  return (
    <div className="iframe-container">
      <iframe
        className="iframe-container__item"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  );
}

