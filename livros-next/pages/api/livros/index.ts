import { NextApiRequest, NextApiResponse } from 'next';
import { Livro } from '../../../classes/modelo/Livro';
import { ControleLivro } from '../../../classes/controle/ControleLivros';

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      return res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const livro: Livro = req.body;
      controleLivro.incluir(livro);
      return res.status(200).json({ message: 'Livro incluído com sucesso!' });
    } else {
      return res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    return res.status(500).end(); // Exceção no servidor
  }
};
