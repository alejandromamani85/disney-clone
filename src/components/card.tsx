const Card = ({
  thumbnail,
  title,
}: {
  thumbnail: { url: string };
  title: string;
}) => {
  return (
    <img
      className="w-full cursor-pointer rounded-lg object-cover shadow-xl shadow-black transition-all duration-200 hover:scale-105 hover:ring-[3px] hover:ring-white hover:ring-offset-[3px] hover:ring-offset-black"
      src={thumbnail.url}
      alt={title}
    />
  );
};
export default Card;
