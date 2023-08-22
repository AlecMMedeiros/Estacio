import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { LinhaLivro } from '../componentes/LinhaLivro';
import { Menu } from '../componentes/Menu';
import Head from 'next/head';
import { Livro } from '@/classes/modelo/Livro';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return response.ok;
};

const LivroLista = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obter().then((data) => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = (codigo: number) => {
    excluirLivro(codigo).then(() => setCarregado(false));
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
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
