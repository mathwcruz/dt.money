import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  const { transactions } = useTransactions(); //pegando o array de transaçãoes que está armazenado no Contexto useTransactions

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount; //somando o total de depósitos
        acc.total += transaction.amount; //somando o total positivo
      } else if (transaction.type === "withdraw") {
        acc.withdraws += transaction.amount; //somando o total de saídas
        acc.total -= transaction.amount; //descontando o valor de saída do total
      };

      return acc; //retornando o total
    }, //segundo argumento recebe um objeto contendo os valores totais de "depósito", "saídas" e "total dos totais"
    {
      //valores default das variáveis, irão incrementar com o rduce
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            //formatando para R$
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            //formatando para R$
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            //formatando para R$
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};
