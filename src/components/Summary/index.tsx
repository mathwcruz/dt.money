import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const { transactions } = useTransactions(); //setando o valor do Contexto "TransactionsContext" na variável data utilizando o hook useContext
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount; //somando o total de depósitos
      acc.total += transaction.amount; //somando o total positivo
    } else {
      acc.withdraws += transaction.amount; //somando o total de saídas
      acc.total -= transaction.amount; //somando o total negativo
    }

    return acc; //retornando o total
  }, { //valores default das variáveis
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', { //formatando para R$
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)} 
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>
          -{new Intl.NumberFormat('pt-BR', { //formatando para R$
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', { //formatando para R$
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};