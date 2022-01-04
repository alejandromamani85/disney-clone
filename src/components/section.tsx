import { VideoProps } from "../model/types";
import Card from "./card";

const Section = ({
  videos,
  genre,
  ...props
}: {
  videos: VideoProps[];
  genre: string;
} & JSX.IntrinsicElements["div"]) => {
  return (
    <div className="section" {...props}>
      <h3>{genre}</h3>
      <div>
        {videos.map((video) => (
          <a key={video.id} href={`/videos/${video.slug}`}>
            <Card {...video} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Section;
