import styled from "styled-components";

export const SpinnerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: fit-content;

  .dot {
    width: 6px;
    height: 6px;
    margin: 0 2px;
    background-color: #000000;
    border-radius: 50%;
    animation: bounce 0.4s infinite alternate;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    to {
      transform: translateY(-5px);
    }
  }
`;
