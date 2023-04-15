import { createUser, getAllUsers } from 'apps/commerce/controllers/userController'
import { apiConnection, checkAuth } from 'apps/commerce/tools'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = apiConnection
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await getAllUsers(req, res)
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    await createUser(req, res)
  })

export default handler
