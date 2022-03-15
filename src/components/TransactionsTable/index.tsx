import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransaction] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransaction(data.transactions));
  }, []);
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
