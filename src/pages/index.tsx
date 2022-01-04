import type { InferGetStaticPropsType, NextPage } from "next";
import Section from "../components/section";
import Navbar from "../components/navbar";
import { VideoProps } from "../model/types";
import { FranchiseSection } from "../components/franchise-section";
import { getAllVideos, getAccount } from "../services/graphql";
import { GraphQLClient } from "graphql-request";
import { getEnvVariable } from "../utilities/env-utils";

export const getStaticProps = async () => {
  const gqlClient = new GraphQLClient(getEnvVariable("ENDPOINT"), {
    headers: { Authorization: `Bearer ${getEnvVariable("GRAPH_CMS_TOKEN")}` },
  });

  const videosData = await getAllVideos(gqlClient);
  const accountData = await getAccount(gqlClient);

  if (!videosData || !accountData) {
    return {
      notFound: true,
    } as { notFound: true };
  }
  return {
    props: { videos: videosData.videos, account: accountData.account },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  videos,
  account,
}) => {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  const filterVideos = (videoList: VideoProps[], genre: string) =>
    videos.filter((video) => video.tags.includes(genre));

  const unSeenVideos = (videos: VideoProps[]) =>
    videos.filter((video) => video.seen === false || video.seen === null);

  return (
    <>
      <Navbar account={account} />
      <div className="app">
        <div className="main-video">
          <img src={randomVideo.thumbnail.url} alt={randomVideo.title} />
        </div>
        <FranchiseSection />

        <Section genre={"Recommended for you"} videos={unSeenVideos(videos)} />
        <Section genre={"Family"} videos={filterVideos(videos, "family")} />
        <Section genre={"Heroes"} videos={filterVideos(videos, "heroes")} />
        <Section
          genre={"Science Fiction"}
          videos={filterVideos(videos, "science fiction")}
        />

        <Section
          id="disney"
          genre={"Disney"}
          videos={filterVideos(videos, "disney")}
        />
        <Section
          id="pixar"
          genre={"Pixar"}
          videos={filterVideos(videos, "pixar")}
        />
        <Section
          id="starwars"
          genre={"Star Wars"}
          videos={filterVideos(videos, "starwars")}
        />
        <Section
          id="natgeo"
          genre={"National Geographic"}
          videos={filterVideos(videos, "natgeo")}
        />
        <Section
          id="marvel"
          genre={"Marvel"}
          videos={filterVideos(videos, "marvel")}
        />
      </div>
      <div></div>
    </>
  );
};

export default Home;
