import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions(); //pegando o array de transaçãoes que está armazenado no Contexto useTransactions

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    //formatando para R$
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt) //formatando a data em dd/mm/yyyy
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};
