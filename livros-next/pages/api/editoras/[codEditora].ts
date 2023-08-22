import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const codEditora = Number(req.query.codEditora);
      const nomeEditora = controleEditora.getNomeEditora(codEditora);
      res.status(200).json({ nome: nomeEditora });
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu uma exceção no servidor' }); // Exceção ocorrida no servidor
  }
};
