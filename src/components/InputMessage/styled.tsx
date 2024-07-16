import styled from "styled-components";

export const InputMessageStyled = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background: var(--secondaryGradient);
  box-shadow: var(--secondaryBoxShadow);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  .button__send {
    padding: 6px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  textarea {
    width: 80%;
    border: none;
    padding: 10px 10px;
    border-radius: 10px;
    text-align: left;
    font-size: 13px;
    overflow-y: hidden;
    /* resize: none;  VOU TER QUE MELHORAR ISSO AQUI */
  }

  .chatbox__button button,
  .chatbox__button button:focus,
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
