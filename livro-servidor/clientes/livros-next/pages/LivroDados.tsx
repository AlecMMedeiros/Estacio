import { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from '../componentes/Menu';
import Head from 'next/head';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { ControleLivros } from '../classes/controle/ControleLivros';
import { Livro } from '@/classes/modelo/Livro';

import styles from '../styles/LivroDados.module.css'; 

const controleEditora = new ControleEditora();
const controleLivros = new ControleLivros();  

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);
  const router = useRouter();

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro = new Livro('', codEditora, titulo, resumo, autores.split('\n')); 

    controleLivros.incluir(livro)
      .then(success => {
        if (success) {
          router.push('/LivroLista');
        }
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo</title>
      </Head>
      <Menu />
      <main>
        <h1>Inclusão de Livro</h1>
        <form onSubmit={incluir}>
          <select value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao, index) => (
              <option key={index} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
          <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" />
          <textarea value={resumo} onChange={e => setResumo(e.target.value)} placeholder="Resumo" />
          <textarea value={autores} onChange={e => setAutores(e.target.value)} placeholder="Autores" />
          <button type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
