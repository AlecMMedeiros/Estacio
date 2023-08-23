import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Livro[] = [
    new Livro(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1']),
    new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Autor 2']),
    new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Autor 3']),
  ];
  
  constructor() { }

  public  obterLivros() {
      return this.livros;
    }
  
  public  incluir(livro: Livro) {
      livro.codigo = Math.max(...this.livros.map((l) => l.codigo)) + 1;
      this.livros.push(livro);
    }
  
  public  excluir(codigo: number) {
      const index = this.livros.findIndex((l) => l.codigo === codigo);
      if (index !== -1) {
        this.livros.splice(index, 1);
      }
    }


  
}


