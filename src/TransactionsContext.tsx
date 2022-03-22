// eslint-disable-next-line object-curly-newline
import { ReactNode, createContext, useState, useEffect } from 'react';

import { api } from './services/api';

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transactions[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransaction(data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
