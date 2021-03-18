import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const rightToCenterAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Content= styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 415px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  } 

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    animation: ${rightToCenterAnimation} ease-in-out 1s;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    @media(max-width: 415px) {
      margin-top: 2rem;
      justify-self: center;
    }
  }
`;