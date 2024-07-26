// import { ChatbotStyled } from "./styled";
import imageIfma from "../../../../public/images/logo.png";
import Spinner from "../Spinner";
import * as S from "./styled";
import InputMessage from "../InputMessage";
import { useEditor } from "../../../../Provider/Editor";

export const ChatInterface = () => {
  const { chatHistory, isError, isLoading } = useEditor();

  return (
    <S.ChatbotStyled>
      <S.HeaderStyled>
        <div className="chatbox__image--header">
          <img src={imageIfma} alt="Logo do ifma" width={"100%"} />
        </div>
        <h4 className="chatbox__heading--header">IFMA CHATBOT</h4>
      </S.HeaderStyled>
      <S.BodyStyled>
        <div className="chatbox__messages">
          {chatHistory.length === 0 && (
            <div className="bot-container">
              <img
                className="img-chat"
                src={imageIfma}
                alt="Logo do ifma"
                width={"100%"}
              />
              <p className="bot-response">
                <Spinner />
              </p>
            </div>
          )}
          {chatHistory?.map((data, index) => (
            <div key={index}>
              {data.userMessage && (
                <div className="user">
                  <p className="user-message">{data.userMessage}</p>
                </div>
              )}
              <div className="bot-container">
                <img
                  className="img-chat"
                  src={imageIfma}
                  alt="Logo do ifma"
                  width={"100%"}
                />
                <p className="bot-response">
                  {isLoading && !data.botResponse ? (
                    <Spinner />
                  ) : (
                    data.botResponse
                  )}
                  {isError &&
                    !isLoading &&
                    !data.botResponse &&
                    "Ocorreu um erro. Tente novamente"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </S.BodyStyled>
      <S.FooterStyled>
        <InputMessage />
      </S.FooterStyled>
    </S.ChatbotStyled>
  );
};
