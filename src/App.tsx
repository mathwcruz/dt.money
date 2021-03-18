import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsProvider } from './hooks/useTransactions';

import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root'); //questão de acessibilidade

export function App() {
  //os estados e funções do modal ficam aqui no componente <App /> pq o componente <Header /> recebe uma função, caso essas funções e estado estivessem no arquivo do componente NewTransactionModal, não seria possível passar ao componente <Header /> a função de abrir o modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true); //abrindo o modal
  };

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false); //fechando o modal
  };

  return (
    <TransactionsProvider> {/* envolvendo toda a aplicação com o Contexto de Transações */}
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal} //passando a função que abre o modal
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen} //conferindo se o modal está aberto ou fechado
        onRequestClose={handleCloseNewTransactionModal} //fechando o modal
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
};
