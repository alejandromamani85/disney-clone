// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import { AccountProps } from "../../model/types";
import { getAccount } from "../../services/graphql";
import { getEnvVariable } from "../../utilities/env-utils";

type Data = {
  account: AccountProps;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) =>
  Promise.resolve(
    new GraphQLClient(getEnvVariable("ENDPOINT"), {
      headers: { Authorization: `Bearer ${getEnvVariable("GRAPH_CMS_TOKEN")}` },
    })
  )
    .then(getAccount)
    .then(res.status(200).json);
