import {
  createProfile,
  getAllProfiles,
} from 'apps/commerce/controllers/profileController';
import { apiConnection, checkAuth } from 'apps/commerce/tools';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = apiConnection
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res);
    await getAllProfiles(req, res);
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res);
    await createProfile(req, res);
  });

export default handler;
