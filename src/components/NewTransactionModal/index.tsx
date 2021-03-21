import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { useTransactions } from "../../hooks/useTransactions";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void; //nao recebe nada como parâmetro e nao retorna nada
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions(); //pegando, do Context useTransactions, a função que cria uma nova transação

  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(e: FormEvent) {
    //propriedade event deve ser to tipo FormEvent
    e.preventDefault();

    //enviando os dados dos inputs para a api e criando uma nova transação através da função createTransaction() do Context useTransactions
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    //limpando os dados dos inputs
    setTitle("");
    setCategory("");
    setType("deposit");
    setAmount(0);

    onRequestClose(); //fechando o modal
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen} //irá indicar se o modal está aberto ou fechado
      onRequestClose={onRequestClose} //fechando o modal caso o usuário clique fora do modal
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose} //fechando o modal
      >
        <img src={closeImg} alt="Fechar" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType("deposit") }} //invocando uma função direto na propriedade onCLick
            isActive={type === "deposit"} //propriedade que verifica se o botão já está clicado
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType("withdraw") }} //setando o tipo da transação como saída
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastar</button>
      </Container>
    </Modal>
  );
};
