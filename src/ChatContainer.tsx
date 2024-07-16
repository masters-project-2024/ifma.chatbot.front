import ChatInterface from "./components/ChatInterface";
import { EditorProvider } from "./Provider";

export const ChatContainer = (): JSX.Element => {
  return (
    <>
      <EditorProvider>
        <ChatInterface />
      </EditorProvider>
    </>
  );
};
