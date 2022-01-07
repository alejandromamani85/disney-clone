const Video = ({
  video,
  ...props
}: {
  video: { thumbnail: { url: string }; title: string };
  [key: string]: any;
}) => {
  return <img className="card" src={video.thumbnail.url} alt={video.title} />;
};
export default Video;
