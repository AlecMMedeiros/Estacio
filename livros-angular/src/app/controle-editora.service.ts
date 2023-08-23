import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})


  
export class ControleEditoraService {
  private editoras: Editora[] = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C'),
  ];

  constructor() { }


 
    public getEditoras() {
      return this.editoras;
    }
  
    public getNomeEditora(codEditora: number) {
      return this.editoras.find((e) => e.codEditora === codEditora)?.nome || '';
    }
  
}



