import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const codigo = Number(req.query.codigo);
      controleLivro.excluir(codigo);
      return res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } else {
      return res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    return res.status(500).end(); // Exceção no servidor
  }
};
