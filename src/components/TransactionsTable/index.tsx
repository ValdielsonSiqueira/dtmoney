import { useContext } from 'react';
import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transition) => (
            <tr key={transition.id}>
              <td>{transition.title}</td>
              <td className={transition.type}>
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transition.amount)}
              </td>
              <td>{transition.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transition.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
