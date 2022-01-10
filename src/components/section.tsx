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
      <h3 className="text-lg font-bold py-2">{name}</h3>
      <div className="w-full">
        <div className="grid grid-rows-1 grid-cols-5 gap-x-4">
          {videos.map((video) => (
            <a key={video.id} href={`/videos/${video.slug}`}>
              <Card {...video} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section;
