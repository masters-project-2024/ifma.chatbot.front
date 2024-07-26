// import { ChatbotStyled } from "./styled";
import imageIfma from "../../../../public/images/logo.png";
import iconClose from "../../../../public/images/close.svg";
import Spinner from "../Spinner";
import { ChatbotStyled } from "./styled";
import ChatButton from "../ChatButton";
import InputMessage from "../InputMessage";
import { useEditor } from "../../../../Provider/Editor";

export const ChatInterface = () => {
  const { open, handleOpenChat, chatHistory, isError, isLoading } = useEditor();

  return (
    <ChatbotStyled>
      <div className="chatbox">
        <div
          className="chatbox__support"
          style={{ display: open ? "flex" : "none" }}
        >
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src={imageIfma} alt="Logo do ifma" width={"100%"} />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">IFMA CHATBOT</h4>
            </div>

            <img
              src={iconClose}
              alt="fechar"
              onClick={() => handleOpenChat()}
              style={{ cursor: "pointer" }}
            />
          </div>
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
          <InputMessage />
        </div>
        <ChatButton />
      </div>
    </ChatbotStyled>
  );
};
