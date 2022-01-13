import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import { getEnvVariable } from "../../utilities/env-utils";
import { VideoProps } from "../../model/types";
import { getVideo } from "../../services/graphql";
import Link from "next/link";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context.query.slug as string;

  const client = new GraphQLClient(getEnvVariable("ENDPOINT"), {
    headers: { Authorization: `Bearer ${getEnvVariable("GRAPH_CMS_TOKEN")}` },
  });

  const data: { video: VideoProps } = await getVideo(client, { slug });

  if (!data) {
    return {
      notFound: true,
    } as { notFound: true };
  }

  return {
    props: {
      video: data.video,
    },
  };
};

const changeToSeen = async (slug: string) => {
  return await fetch("/api/changeToSeen", {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({ slug }),
  });
};

const Video: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ video }) => {
    const [watching, setWatching] = useState(false);
    return (
      <div className="text-white">
        {!watching && (
          <>
            <img
              className="absolute w-full"
              src={video.thumbnail.url}
              alt={video.title}
            />
            <div className="relative top-40 left-40">
              <p>{video.tags.join(", ")}</p>
              <p>{video.description}</p>
              <Link href="/">
                <p>go back</p>
              </Link>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => {
                  changeToSeen(video.slug);
                  watching ? setWatching(false) : setWatching(true);
                }}
              >
                PLAY
              </button>
            </div>
          </>
        )}
        {watching && (
          <video width="100%" controls autoPlay={true}>
            <source src={video.mp4.url} type="video/mp4" />
          </video>
        )}
        <div
          className="info-footer"
          onClick={() => (watching ? setWatching(false) : null)}
        ></div>
      </div>
    );
  };

export default Video;
