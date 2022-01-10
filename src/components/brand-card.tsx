import Image from "next/image";
const BrandCard = ({
  src,
  ...props
}: { src: StaticImageData } & JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-xl shadow-black border-2 border-gray-700"
      {...props}
    >
      <Image src={src} />
    </div>
  );
};

export default BrandCard;
