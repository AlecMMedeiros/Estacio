import { ControleEditora } from '../classes/controle/ControleEditora'; // Importe conforme o local do arquivo
import { Livro } from '../classes/modelo/Livro'; // Importe conforme o local do arquivo

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  const handleExcluir = () => {
    excluir(livro.codigo);
  };

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>{livro.resumo}</td> 
      <td>{livro.autores.join(', ')}</td>
      <td>
      <button onClick={handleExcluir}>Excluir</button>
      </td>
    </tr>
  );
};
