import { PropsChat } from "../components/types";

export type EditorContextType = {
  handleOpenChat: () => void;
  open: boolean;
  handleInputMessage: (message: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyPress: (key: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  message: string;
  chatHistory: PropsChat[];
  isLoading: boolean;
  isError: boolean;
  handleSendQuestion: () => void;
};
