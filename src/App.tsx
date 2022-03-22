import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <Header onHandleOpenNewTransaction={onHandleOpenNewTransaction} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewModalOpen}
        onRequestClose={onHandleCloseNewTransaction}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
