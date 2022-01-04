import { GraphQLClient } from "graphql-request";
import { AccountProps, VideoProps } from "../model/types";

export const getAllVideos = (graphQLCLient: GraphQLClient) =>
  graphQLCLient.request<{ videos: VideoProps[] }>(
    `
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
        }
      }
  `
  );

export const getVideo = (
  graphQLClient: GraphQLClient,
  variables: { slug: string }
) =>
  graphQLClient.request<{ video: VideoProps }>(
    `
    query ($slug: String!) {
      video(where: { slug: $slug }) {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
`,
    variables
  );

export const getAccount = (graphQLCLient: GraphQLClient) =>
  graphQLCLient.request<{ account: AccountProps }>(
    `
    query {
      account(where: { id: "ckxkjwj481az50b80igwqezzi" }) {
        username
        avatar {
          url
        }
      }
    }
  `
  );
