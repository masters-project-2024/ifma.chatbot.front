// import { ChatbotStyled } from "./styled";
import "./ChatInterface.css";
import imageIfma from "../../public/images/logo.png";
import iconChat from "../../public/images/chatbox-icon.svg";
import iconSend from "../../public/images/send.svg";
import iconClose from "../../public/images/close.svg";
import { useEffect, useState } from "react";
import sendMessage from "../../services/sendMessage";
import {
  addMessageToHistory,
  getChatHistory,
  initializeChatHistory,
} from "../../utils/storage";
import { useMutation } from "react-query";
import Spinner from "../Spinner";

type PropsChat = {
  userMessage: string;
  botResponse: string;
};

export const ChatInterface = () => {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<PropsChat[]>([]);

  const { isLoading, mutate, isError } = useMutation(sendMessage, {
    onSuccess: (data) => {
      if (data.response) addMessageToHistory(message, data.response);
      setChatHistory(getChatHistory());
      setResponse(data.response);
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const handleSendQuestion = () => {
    if (message.trim() === "") return;

    chatHistory.unshift({ userMessage: message, botResponse: "" });

    setChatHistory(chatHistory);

    setMessage("");
    mutate(message);
  };

  const handleInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendQuestion();
    }
  };
  const handleOpenChat = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (chatHistory.length === 0) {
      initializeChatHistory();
      setChatHistory(getChatHistory());
    }
    if (!open) {
      setChatHistory([]);
      localStorage.clear();
      return;
    }
  }, [open]);

  return (
    <div className="container">
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
              onClick={handleOpenChat}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="chatbox__messages">
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
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Digite sua dúvida aqui..."
              onChange={handleInputMessage}
              onKeyUp={handleKeyPress}
              value={message}
            />
            <button
              className="chatbox__send--footer send__button"
              onClick={() => handleSendQuestion()}
            >
              <img src={iconSend} alt="enviar mensagem" width={25} />
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={handleOpenChat} type="button">
            <img src={iconChat} alt="icone do chat" />
          </button>
        </div>
      </div>

      {isError && <p>Error sending message</p>}
    </div>
  );
};
