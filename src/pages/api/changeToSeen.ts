import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import { getEnvVariable } from "../../utilities/env-utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body }: { body: { slug: string } } = req;
  const graphcms = new GraphQLClient(getEnvVariable("ENDPOINT"), {
    headers: {
      Authorization: `Bearer ${getEnvVariable("GRAPH_CMS_TOKEN")}`,
    },
  });
  await graphcms.request(
    `
    mutation($slug:String){
        updateVideo(where:{slug:$slug}, 
        data:{
          seen:true
        }){
          id,
          title,
          seen
        }
      }`,
    { slug: body.slug }
  );

  await graphcms.request(
    `
      mutation($slug:String){
        publishVideo(where: {slug:$slug}, to: PUBLISHED){
            slug
        }
      }
  `,
    { slug: body.slug }
  );
  res.status(201).json({ slug: body.slug });
};
