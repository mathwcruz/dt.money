import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--input-background);
    border: 1px solid var(--input-border);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: var(--green);
    color: #FFF;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

interface RadioBoxProps { 
  isActive: boolean; //o componente RadioBox recebe a propriedade que verifica se ele já está ativo
  activeColor: 'green' | 'red';
};

//objeto que contém as cores de fundo dos botões de seleção
const colors = {
  green: '#33CC95',
  red: '#E52E4D',
};

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) //setando a cor de fundo baseado na propriedade activeColor que define a cor de fundo do botão
    : 'transparent'
    }; //invocando uma função que é responsável por mudar a cor do background dependendo do valor da propriedade isActive do componente RadioBox
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;
    transition: background 0.4s;

    &:hover {
      border-color: ${darken(0.1, '#D7D7D7')};
    }

    img {
      height: 20px;
      width: 20px
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
`;