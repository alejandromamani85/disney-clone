import Link from "next/link";
import { VideoProps } from "../model/types";
import Card from "./card";

type SectionProps = {
  videos: VideoProps[];
  name: string;
};

const Section = ({
  videos,
  name,
  ...props
}: SectionProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className="pt-4" {...props}>
      <h3 className="py-2 text-lg font-bold">{name}</h3>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-5 sm:gap-x-6">
          {videos.map((video) => (
            <Link key={video.id} href={`/videos/${video.slug}`}>
              <a>
                <Card {...video} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section;
