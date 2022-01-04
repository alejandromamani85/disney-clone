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
      <>
        {!watching && (
          <img
            className="video-image"
            src={video.thumbnail.url}
            alt={video.title}
          />
        )}
        {!watching && (
          <div className="info">
            <p>{video.tags.join(", ")}</p>
            <p>{video.description}</p>
            <Link href="/">
              <p>go back</p>
            </Link>
            <button
              className="video-overlay"
              onClick={() => {
                changeToSeen(video.slug);
                watching ? setWatching(false) : setWatching(true);
              }}
            >
              PLAY
            </button>
          </div>
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
      </>
    );
  };

export default Video;
