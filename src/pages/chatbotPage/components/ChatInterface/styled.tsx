import styled from "styled-components";

export const ChatbotStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HeaderStyled = styled.div`
  height: 80px;
  background: var(--primaryGradient);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-shadow: var(--primaryBoxShadow);

  .chatbox__image--header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    background-color: white;
    margin-right: 10px;

    img {
      width: 50px;
    }
  }

  .chatbox__heading--header {
    font-size: 1.2rem;
    color: white;
  }
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  /* position: sticky; */
  /* bottom: 0; */
  background-color: #f1f1f1;
`;

export const BodyStyled = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;

  .chatbox__messages {
    display: flex;
    flex: 1;
    padding: 0 200px;
    overflow-y: auto;
    flex-direction: column-reverse;

    @media (max-width: 1600px) {
      padding: 0 80px;
    }
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
    word-break: break-word;
    hyphens: auto;
  }

  .img-chat {
    border-radius: 100%;
    height: 35px;
    width: 35px;
    background-color: white;
    margin-bottom: 10px;
  }

  .bot-container {
    display: flex;
    align-items: end;
  }
`;
