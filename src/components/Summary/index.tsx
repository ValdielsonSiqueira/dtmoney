import { Container } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="Saidas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
