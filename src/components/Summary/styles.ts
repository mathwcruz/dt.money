import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50 {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
  @media(max-width: 680px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    animation: ${appearAnimation} ease-in-out 0.9s;
    
    &:last-child {
      background: var(--green);
      color: #FFF;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block; //como padrão a tag </strong> vem com display "inline" e o margin-top, não funciona, entao tem de setar display: block
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;  
      line-height: 2rem;
    }
  }
`;