import { NextApiRequest, NextApiResponse } from 'next';

import productsMock from '../../products.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(productsMock);
};
