import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

import { api } from '.././services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; //criando uma nova "interface" se baseando na interface Transaction setada acima, porém, está sendo omitido os atributos "id" e "createdAt", eles nao sao necessários

interface TransactionsProviderProps {
  children: ReactNode; //pode retornar conteudo html, por exemplo
};

interface TransactionsContextData {
  transactions: Transaction[]; //um array de objetos do tipo Transaction
  createTransaction: (transaction: TransactionInput) => Promise<void>; //umafunção q recebe uma transação por parâmetro e nao retorna nada
};

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData); //criando um Contexto, começa com um objeto vazio como default

export function TransactionsProvider({ children } : TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    }); //criando uma nova transação
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]); //setando a nova transação criada ao array de transações
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}> {/* retornando as transações como valor do contexto  e a função que cria uma nova transação */}
      {children} {/* recebe um conteudo do componente filho que são o Header, Dashboard e NewTransactionModal */} 
    </TransactionsContext.Provider>
  );
};

//criando um hook
export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
};