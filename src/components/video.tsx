const Video = ({
  thumbnail,
  title,
}: {
  thumbnail: { url: string };
  title: string;
}) => {
  return <img className="card" src={thumbnail.url} alt={title} />;
};
export default Video;
