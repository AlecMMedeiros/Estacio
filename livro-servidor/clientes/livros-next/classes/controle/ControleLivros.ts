import { Livro } from '../modelo/Livro';

interface LivroMongo {
  _id: string | null;
  titulo: string;
  codEditora: number;
  resumo: string;
  autores: string[];
}

export const baseURL = "http://localhost:3030/livros";

export class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL, { method: 'GET' });
    const data: LivroMongo[] = await response.json();
    return data.map((item) => ({
      codigo: item._id ? item._id.toString() : "", 
      titulo: item.titulo,
      codEditora: item.codEditora,
      resumo: item.resumo,
      autores: item.autores
    }));
    
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null,
      titulo: livro.titulo,
      codEditora: livro.codEditora,
      resumo: livro.resumo,
      autores: livro.autores
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livroMongo),
    });

    return response.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return response.ok;
  }
}
