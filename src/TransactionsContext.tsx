// eslint-disable-next-line object-curly-newline
import { ReactNode, createContext, useState, useEffect } from 'react';

import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransaction(data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionsInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const transaction = response.data.transactions;

    setTransaction([...transactions, transaction]);
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
