import {
  deleteUser,
  getUserById,
  updateUser,
} from 'apps/commerce/controllers/userController';
import { apiConnection, checkAuth } from 'apps/commerce/tools';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = apiConnection
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res);
    await getUserById(req, res);
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res);
    await updateUser(req, res);
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res);
    await deleteUser(req, res);
  });

export default handler;
