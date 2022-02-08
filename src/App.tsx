import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  function onHandleOpenNewTransaction() {
    setIsNewModalOpen(true);
  }

  function onHandleCloseNewTransaction() {
    setIsNewModalOpen(false);
  }

  return (
    <>
      <Header onHandleOpenNewTransaction={onHandleOpenNewTransaction} />
      <Dashboard />
      <Modal
        isOpen={isNewModalOpen}
        onRequestClose={onHandleCloseNewTransaction}
      >
        <h1>Cadastra transação</h1>
      </Modal>
      <GlobalStyle />
    </>
  );
}
