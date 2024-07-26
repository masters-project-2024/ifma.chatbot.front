import styled from "styled-components";

export const InputMessageStyled = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  padding: 10px 100px;
  margin-bottom: 50px;
  width: 70%;
  border-radius: 15px;

  /* Estilos responsivos */
  @media (max-width: 1240px) {
    width: 90%;
    padding: 10px;
    margin: 5px 0;
  }

  .button__send {
    padding: 10px;
    background: var(--secondaryGradient);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 50px;

    :hover {
      opacity: 0.9;
    }
  }

  textarea {
    /* display: flex; */
    width: 90%;
    border: none;
    /* box-sizing: border-box; */
    padding: 15px 5px 10px 20px;
    border-radius: 10px;
    text-align: left;
    overflow-y: auto;
    max-height: 200px;
    min-height: 50px;
    resize: none;
    margin-right: 15px;
    background-color: #d9d9d9;
    :focus {
      outline: none;
    }

    @media (max-width: 800px) {
      margin-right: 15px;
    }
  }

  .chatbox__button button,
  .chatbox__button button:visited {
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
