import type { InferGetStaticPropsType, NextPage } from "next";
import Section from "../components/section";
import Navbar from "../components/navbar";
import { VideoProps } from "../model/types";
import { FranchiseSection } from "../components/franchise-section";
import { getAllVideos, getAccount } from "../services/graphql";
import { GraphQLClient } from "graphql-request";
import { getEnvVariable } from "../utilities/env-utils";
import { useEffect, useState } from "react";

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

  const sections = [
    { order: 1, tag: "new", name: "New" },
    { order: 2, tag: "original", name: "Originals" },
    { order: 3, tag: "disney", name: "Disney" },
    { order: 4, tag: "pixar", name: "Pixar" },
    { order: 5, tag: "starwars", name: "Star Wars" },
    { order: 6, tag: "natgeo", name: "National Geographic" },
    { order: 7, tag: "marvel", name: "Marvel" },
  ];

  return {
    props: {
      sections,
      videos: videosData.videos,
      account: accountData.account,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  videos,
  account,
  sections,
}) => {
  const [randomVideo, setRandomVideo] = useState<VideoProps>();

  useEffect(() => {
    setRandomVideo(videos[6]);
  }, []);

  const filterVideos = (tag: string) =>
    videos.filter((video) => video.tags.includes(tag));

  const unSeenVideos = () =>
    videos.filter((video) => video.seen === false || video.seen === null);

  return (
    <main className="px-24">
      {randomVideo && (
        <div className="w-full h-80 mb-12 overflow-hidden">
          <img
            className="w-full"
            src={randomVideo.thumbnail?.url}
            alt={randomVideo.title}
          />
        </div>
      )}

      <FranchiseSection />
      <Section
        name={"Recommended For You"}
        videos={unSeenVideos().slice(0, 5)}
      />
      <>
        {sections.map((section) => (
          <Section
            id={section.tag}
            key={section.name}
            name={section.name}
            videos={filterVideos(section.tag)}
          />
        ))}
      </>
    </main>
  );
};

export default Home;
