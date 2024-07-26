import React, { useEffect, useState } from "react";
import { EditorContextType } from "./types";
import {
  addMessageToHistory,
  getChatHistory,
  initializeChatHistory,
} from "../utils/storage";
import { useMutation } from "react-query";
import sendMessage from "../services/sendMessage";
import { createContext } from "use-context-selector";
import { PropsChat } from "../pages/chatbot/components/types";

function appendIfNotPresent(message: string) {
  const wordsToAdd = ["IFMA"];
  const allWordsPresent = wordsToAdd.every((word) => message.includes(word));
  if (!allWordsPresent) {
    message = `${message} IFMA`;
  }
  return message.replace(/\n/g, " ");
}

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

  useEffect(() => {
    // if (chatHistory.length === 0 && open) {
    if (chatHistory.length === 0) {
      setTimeout(() => {
        initializeChatHistory();
        setChatHistory(getChatHistory());
      }, 1000);
    }

    // if (!open) {
    //   setChatHistory([]);
    //   localStorage.clear();
    //   return;
    // }
  }, []);

  window.addEventListener("beforeunload", (event) => {
    // Clear localStorage before the page unloads
    setChatHistory([]);
    localStorage.clear();
  });

  const { isLoading, mutate, isError } = useMutation(sendMessage, {
    onSuccess: (data) => {
      if (data.response) addMessageToHistory(message, data.response);
      setChatHistory(getChatHistory());
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
    // mutate(appendIfNotPresent(message));
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
