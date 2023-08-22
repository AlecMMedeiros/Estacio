import { Editora } from '../modelo/Editora';

const editoras: Editora[] = [
  new Editora(1, 'Editora A'),
  new Editora(2, 'Editora B'),
  new Editora(3, 'Editora C'),
];

export class ControleEditora {
  getEditoras() {
    return editoras;
  }

  getNomeEditora(codEditora: number) {
    return editoras.find((e) => e.codEditora === codEditora)?.nome || '';
  }
}
