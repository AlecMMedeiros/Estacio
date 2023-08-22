import { Livro } from '../modelo/Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1']),
  new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Autor 2']),
  new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Autor 3']),
];

export class ControleLivro {
  obterLivros() {
    return livros;
  }

  incluir(livro: Livro) {
    livro.codigo = Math.max(...livros.map((l) => l.codigo)) + 1;
    livros.push(livro);
  }

  excluir(codigo: number) {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
