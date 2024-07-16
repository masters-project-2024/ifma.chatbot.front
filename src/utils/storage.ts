const INITIAL_MENSAGEM_CHAT = `Olá! Eu sou o assistente virtual do IFMA - Campus Caxias 😊. \n\n Como posso ajudar você hoje?`;

export const saveChatHistory = (
  history: { userMessage: string; botResponse: string }[]
) => {
  localStorage.setItem("chatHistory", JSON.stringify(history));
};

export const getChatHistory = (): {
  userMessage: string;
  botResponse: string;
}[] => {
  const history = localStorage.getItem("chatHistory") || null;
  // console.log(history);
  return history ? JSON.parse(history) : [];
};

export const addMessageToHistory = (
  userMessage: string,
  botResponse: string
) => {
  const history = getChatHistory();
  history.unshift({ userMessage, botResponse });
  saveChatHistory(history);
};

// Initialize the chat history with the initial welcome message
export const initializeChatHistory = () => {
  const history = getChatHistory();
  if (history.length === 0) {
    addMessageToHistory("", INITIAL_MENSAGEM_CHAT);
  }
};
