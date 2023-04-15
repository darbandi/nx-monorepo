import {
  deleteProfile,
  getProfileById,
  updateProfile,
} from 'apps/commerce/controllers/profileController'
import { apiConnection, checkAuth } from 'apps/commerce/tools'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = apiConnection
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await getProfileById(req, res)
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await updateProfile(req, res)
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await deleteProfile(req, res)
  })

export default handler
