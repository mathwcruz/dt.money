import styled, { keyframes } from "styled-components";

const bottomToCenterAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const arrowAnimation = keyframes`
  0% {
    right: 30px;
  } 
  100% {
    right: 20px;
  }
`;

export const Container = styled.div`
  margin-top: 4rem;
  @media(max-width: 520px) {
    overflow-x: scroll;
    position: relative;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    &::after {
      content: "→";
      position: absolute;
      font-size: 1.2rem;
      top: -10px;
      right: 20px;
      color: var(--blue);
      animation: ${arrowAnimation} 0.5s ease-in 0s infinite alternate;
    }
  } 
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    animation: ${bottomToCenterAnimation} ease-in-out 1s;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--green);
      }
    }
  }
`;