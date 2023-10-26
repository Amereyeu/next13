export default function Yt({ id }) {
  return (
    <div>
      <iframe
        className=""
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  );
}

