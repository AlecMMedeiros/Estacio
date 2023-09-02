import { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const LivroLista = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const excluir = async (codigo) => {
    await controleLivro.excluir(codigo);
    setCarregado(false);
  };

  useEffect(() => {
    controleLivro.obterLivros()
      .then((result) => {
        setLivros(result);
        setCarregado(true);
      });
  }, [carregado]);

  const LinhaLivro = ({ livro }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
      <tr>
        <td>{livro.titulo} <button className="btn btn-danger btn-sm" onClick={() => excluir(livro.codigo)}>Excluir</button></td>
        <td>{nomeEditora}</td>
        <td>{livro.resumo}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => <li key={index}>{autor}</li>)}
          </ul>
        </td>
      </tr>
    );
  };

  return (
    <main className="container mt-4">
      <h1>Catálogo de Livros</h1>
      <table className="table">
        <thead className='bg-dark text-white'>
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => <LinhaLivro key={index} livro={livro} />)}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
