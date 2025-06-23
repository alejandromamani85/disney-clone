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
import { CloseIcon, PlayIcon } from "../../components/icons";

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
      className="absolute top-0 h-full w-full bg-gray-900 px-4 text-white lg:px-24"
      onClick={() => (watching ? setWatching(false) : null)}
    >
      {!watching && (
        <>
          <div className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <img
              className="w-full rounded-lg"
              src={video.thumbnail.url}
              alt={video.title}
            />
            <div className="flex flex-col items-start justify-between rounded-lg border-2 border-gray-700 bg-gray-800 p-6 sm:flex-row sm:items-center lg:px-28">
              <div>
                <h2 className="text-3xl font-bold uppercase">{video.title}</h2>
                <br />
                <p className="text-lg">{video.description}</p>
                <br />
                <div className="py-4">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mr-2 rounded-full bg-gray-500 px-4 py-2 font-semibold uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="mt-6 flex w-full items-center justify-center rounded border border-gray-400 bg-white p-3 py-2 px-4 text-lg font-semibold text-gray-800 shadow hover:bg-gray-100 sm:w-auto lg:p-4"
                onClick={() => {
                  changeToSeen(video.slug);
                  watching ? setWatching(false) : setWatching(true);
                }}
              >
                <PlayIcon className="my-2 mr-2 h-5" />
                PLAY
              </button>
            </div>
          </div>
        </>
      )}
      {watching && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-50 text-white transition-all duration-200 hover:bg-opacity-75"
            onClick={() => setWatching(false)}
          >
            <CloseIcon className="h-6" />
          </button>
          <video
            className="h-full w-full object-contain"
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
            controls
            autoPlay={true}
          >
            <source src={video.mp4.url} type="video/mp4" />
          </video>
        </div>
      )}
    </main>
  );
};

export default Video;
