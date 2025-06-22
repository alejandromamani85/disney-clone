import Image from "next/image";
const BrandCard = ({
  src,
  ...props
}: { src: StaticImageData } & JSX.IntrinsicElements["a"]) => {
  return (
    <a 
      {...props} 
      className={`w-full cursor-pointer rounded-lg object-cover shadow-xl shadow-black transition-all duration-200 hover:scale-105 hover:ring-[3px] hover:ring-white hover:ring-offset-[3px] hover:ring-offset-black ${props.className || ''}`}
    >
      <div className="rounded-lg border-2 border-gray-700 bg-gray-800">
        <Image src={src} />
      </div>
    </a>
  );
};

export default BrandCard;
