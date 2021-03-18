import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void; //a função não recebe nada como parâmetro e não irá retornar nada
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button 
          type="button"
          onClick={onOpenNewTransactionModal} //função para abrir o modal
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
