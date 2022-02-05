import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import { getEnvVariable } from "../../utilities/env-utils";
import { getVideo } from "../../services/graphql";
import { ParsedUrlQuery } from "querystring";

type NotFoundProps = { notFound: true };

type ParamsProps = {
  slug: string;
} & ParsedUrlQuery;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<ParamsProps>) =>
  Promise.resolve(
    new GraphQLClient(getEnvVariable("ENDPOINT"), {
      headers: { Authorization: `Bearer ${getEnvVariable("GRAPH_CMS_TOKEN")}` },
    })
  )
    .then((client) =>
      getVideo(client, {
        slug: params?.slug ?? "", //params ? ("slug" in params ? (params.slug as string) : "") : "",
      })
    )
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
        revalidate: 10,
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

const Video: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  video,
}) => {
  const [watching, setWatching] = useState(false);
  return (
    <main
      className="absolute top-0 h-full w-full bg-gray-900 px-24 text-white"
      onClick={() => (watching ? setWatching(false) : null)}
    >
      {!watching && (
        <>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <img
              className="w-full"
              src={video.thumbnail.url}
              alt={video.title}
            />
          </div>
          <div className="relative w-1/3 px-10 py-36">
            <div>
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 rounded-full bg-black px-4 py-1 font-semibold uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="py-4">{video.description}</p>
            <div>
              <button
                className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
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
        <>
          <video
            className="absolute top-20 left-0 w-full"
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
            controls
            autoPlay={true}
          >
            <source src={video.mp4.url} type="video/mp4" />
          </video>
        </>
      )}
    </main>
  );
};

export default Video;
