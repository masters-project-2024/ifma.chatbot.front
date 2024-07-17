import styled from "styled-components";

export const ChatbotStyled = styled.div`
  .chatbox {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }

  .chatbox__support {
    flex-direction: column;
    background: #dbdbdb;
    z-index: -123456;
    transition: all 0.5s ease-in-out;
    height: 450px;
    width: 350px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .chatbox--active {
    transform: translateY(-40px);
    z-index: 123456;
    opacity: 1;
  }

  .chatbox__header {
    position: sticky;
    top: 0;
    background: orange;
  }

  .chatbox__messages {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .chatbox__header {
    background: var(--primaryGradient);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: var(--primaryBoxShadow);
  }

  .chatbox__image--header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 40px;
    width: 50px;
    background-color: white;
  }

  .chatbox__content--header {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .chatbox__heading--header {
    font-size: 1.2rem;
    color: white;
  }

  .chatbox__messages {
    flex: 1;
    font-size: 13px;
    padding: 0 5px;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;
  }

  .chatbox__messages .user-message {
    display: flex;
    padding: 5px;
    background-color: var(--primary);
    color: #ffffff;
    font-weight: 300;
    width: fit-content;
    border-radius: 8px;
    margin: 10px 5px;
    max-width: 75%;
    word-break: break-word;
    hyphens: auto;
  }
  .user {
    display: flex;
    justify-content: end;
  }

  .chatbox__messages .bot-response {
    display: flex;
    padding: 5px;
    background-color: #c6c6c7;
    font-weight: 300;
    width: fit-content;
    border-radius: 8px;
    align-items: center;
    margin: 10px 5px;
    max-width: 75%;
  }

  .img-chat {
    border-radius: 100%;
    height: 25px;
    width: 25px;
    background-color: white;
    margin-bottom: 10px;
  }

  .bot-container {
    display: flex;
    align-items: end;
  }
`;
