const Card = ({
  thumbnail,
  title,
}: {
  thumbnail: { url: string };
  title: string;
}) => {
  return (
    <img
      className="rounded-lg shadow-xl shadow-black"
      src={thumbnail.url}
      alt={title}
    />
  );
};
export default Card;
