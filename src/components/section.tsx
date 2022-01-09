import { VideoProps } from "../model/types";
import Card from "./card";

type GenreProps =
  | "recommended"
  | "new"
  | "originals"
  | "disney"
  | "pixar"
  | "starwars"
  | "natgeo"
  | "marvel";

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
    <div className="section" {...props}>
      <h3>{name}</h3>
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
