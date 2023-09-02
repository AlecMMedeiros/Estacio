import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Livro } from './modelo/Livro';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event) => {
    event.preventDefault();
    const livro = new Livro("", codEditora, titulo, resumo, autores.split('\n'));
    await controleLivro.incluir(livro);
    navigate('/');
  };

  return (
    <main className="container mt-4">
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label>Título</label>
          <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Resumo</label>
          <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Editora</label>
          <select className="form-control" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao, index) => (
              <option key={index} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Autores (um por linha)</label>
          <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Incluir</button>
      </form>
    </main>
  );
};

export default LivroDados;
