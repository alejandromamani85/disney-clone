import Image from "next/image";
const BrandCard = ({
  src,
  ...props
}: { src: StaticImageData } & JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className="rounded-lg border-2 border-gray-700 bg-gray-800 shadow-xl shadow-black"
      {...props}
    >
      <Image src={src} />
    </div>
  );
};

export default BrandCard;
