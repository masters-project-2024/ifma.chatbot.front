import styled from "styled-components";

export const ChatButtonStyled = styled.div`
  text-align: right;

  button,
  button:focus,
  button:visited {
    padding: 10px;
    background: white;
    border: none;
    outline: none;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin-top: 10px;
  }
`;
