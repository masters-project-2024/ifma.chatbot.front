import React, { useEffect, useState } from "react";
import { EditorContextType } from "./types";
import {
  addMessageToHistory,
  getChatHistory,
  initializeChatHistory,
} from "../utils/storage";
import { useMutation } from "react-query";
import sendMessage from "../services/sendMessage";
import { PropsChat } from "../components/types";
import { createContext } from "use-context-selector";

export const Editor = createContext({} as EditorContextType);

type EditorProviderProps = {
  children: React.ReactNode;
};

export function EditorProvider({ children }: EditorProviderProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenChat = () => {
    setOpen(!open);
  };

  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<PropsChat[]>([]);
  const [response, setResponse] = useState<string>("");

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

  const { isLoading, mutate, isError } = useMutation(sendMessage, {
    onSuccess: (data) => {
      if (data.response) addMessageToHistory(message, data.response);
      setChatHistory(getChatHistory());
      // setResponse(data.response);
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

  const handleInputMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleSendQuestion();
    }
  };

  return (
    <>
      <Editor.Provider
        value={{
          open,
          handleOpenChat,
          handleInputMessage,
          handleKeyPress,
          message,
          chatHistory,
          isLoading,
          isError,
          handleSendQuestion,
        }}
      >
        {children}
      </Editor.Provider>
    </>
  );
}
