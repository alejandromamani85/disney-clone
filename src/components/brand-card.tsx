import Image from "next/image";
const BrandCard = ({
  src,
  hoverVideo,
  ...props
}: {
  src: StaticImageData;
  hoverVideo?: string | null;
} & JSX.IntrinsicElements["a"]) => {
  return (
    <a
      {...props}
      className={`group w-full cursor-pointer rounded-lg object-cover shadow-xl shadow-black transition-all duration-200 hover:scale-105 hover:ring-[3px] hover:ring-white hover:ring-offset-[3px] hover:ring-offset-black ${
        props.className || ""
      }`}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-800">
        {/* Static image*/}
        <div className="relative z-10">
          <Image src={src} className="rounded-lg" />
        </div>

        {/* Hover video - only shown on hover */}
        {hoverVideo && (
          <video
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={hoverVideo} type="video/mp4" />
          </video>
        )}
      </div>
    </a>
  );
};

export default BrandCard;
