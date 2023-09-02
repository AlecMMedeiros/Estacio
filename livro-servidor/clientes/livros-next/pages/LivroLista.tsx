import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { LinhaLivro } from '../componentes/LinhaLivro';
import { Menu } from '../componentes/Menu';
import Head from 'next/head';
import { Livro } from '@/classes/modelo/Livro';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ControleLivros } from '@/classes/controle/ControleLivros'; // Importação da classe ControleLivro

const LivroLista = () => {
  const controleLivros = new ControleLivros(); // Instância de ControleLivros
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      controleLivros.obterLivros()
      .then((data) => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = (codigo: string) => { 
    controleLivros.excluir(codigo) 
    .then(() => setCarregado(false)); 
  };

  return (
    <div>
      <Head>
        <title>Catálogo</title>
      </Head>
      <Menu />
      <main>
        <h1>Título da Página</h1>
        <table>
          <thead>
          </thead>
          <tbody>
            {livros.map((livro, index) => ( 
              <LinhaLivro key={index} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
