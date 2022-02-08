import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onHandleOpenNewTransaction: () => void;
}

export function Header({ onHandleOpenNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onHandleOpenNewTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
