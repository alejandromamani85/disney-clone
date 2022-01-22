import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import { getEnvVariable } from "../../utilities/env-utils";
import { getVideo } from "../../services/graphql";

type NotFoundProps = { notFound: true };

export const getServerSideProps = async ({
  query: { slug },
}: GetServerSidePropsContext) =>
  Promise.resolve(
    new GraphQLClient(getEnvVariable("ENDPOINT"), {
      headers: { Authorization: `Bearer ${getEnvVariable("GRAPH_CMS_TOKEN")}` },
    })
  )
    .then((client) => getVideo(client, { slug: slug as string }))
    .then((data) => {
      if (!data) {
        return {
          notFound: true,
        } as NotFoundProps;
      }

      return {
        props: {
          video: data.video,
        },
      };
    })
    .catch(() => Promise.reject("We have an inner error"));

const changeToSeen = async (slug: string) => {
  return await fetch("/api/changeToSeen", {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({ slug }),
  });
};

const Video: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ video }) => {
  const [watching, setWatching] = useState(false);
  return (
    <main
      className="px-24 text-white h-screen"
      onClick={() => (watching ? setWatching(false) : null)}
    >
      {!watching && (
        <>
          <div className="w-full h-full absolute overflow-hidden left-0 top-0">
            <img
              className="w-full"
              src={video.thumbnail.url}
              alt={video.title}
            />
          </div>

          <div className="relative px-10 py-28 w-1/3">
            <div>
              {video.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="bg-black rounded-full px-4 py-1 font-semibold mr-2 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="py-4">{video.description}</p>
            <div>
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
          </div>
        </>
      )}
      {watching && (
        <video
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
          controls
          autoPlay={true}
        >
          <source src={video.mp4.url} type="video/mp4" />
        </video>
      )}
    </main>
  );
};

export default Video;
