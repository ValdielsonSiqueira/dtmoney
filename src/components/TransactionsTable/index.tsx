import { Container } from './styles';
import { formatDatePtBr } from '../../utils/index.js';
import { useTransactions } from '../../hooks/useTransactions';

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
                {formatDatePtBr(transition.amount)}
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
