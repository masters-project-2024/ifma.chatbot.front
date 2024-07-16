import { useContextSelector } from "use-context-selector";
import { EditorContextType } from "./types";
import { Editor } from ".";

export const useEditor = (): EditorContextType => {
  const open = useContextSelector(Editor, (editor) => editor.open);
  const handleOpenChat = useContextSelector(
    Editor,
    (editor) => editor.handleOpenChat
  );
  const handleKeyPress = useContextSelector(
    Editor,
    (editor) => editor.handleKeyPress
  );
  const handleInputMessage = useContextSelector(
    Editor,
    (editor) => editor.handleInputMessage
  );
  const message = useContextSelector(Editor, (editor) => editor.message);
  const isError = useContextSelector(Editor, (editor) => editor.isError);
  const isLoading = useContextSelector(Editor, (editor) => editor.isLoading);
  const chatHistory = useContextSelector(
    Editor,
    (editor) => editor.chatHistory
  );
  const handleSendQuestion = useContextSelector(
    Editor,
    (editor) => editor.handleSendQuestion
  );

  return {
    open,
    handleOpenChat,
    handleInputMessage,
    handleKeyPress,
    message,
    chatHistory,
    isLoading,
    isError,
    handleSendQuestion,
  };
};
