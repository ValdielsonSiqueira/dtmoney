import { Container } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { formatDatePtBr } from '../../utils/index.js';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw -= transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>{formatDatePtBr(summary.total)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="Saidas" />
        </header>
        <strong>{formatDatePtBr(summary.withdraw)}</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={total} alt="total" />
        </header>
        <strong>{formatDatePtBr(summary.total)}</strong>
      </div>
    </Container>
  );
}
