import React from "react";
import { EditorProvider } from "./Provider";
import CornerChat from "./pages/chatbot/components/ChatInterface"; // PEQUENO CHAT
import FullScreenChat from "./pages/chatbotPage/components/ChatInterface"; //CHAT QUE FICA EM TODA TELA

function App() {
  return (
    <>
      <EditorProvider>
        <FullScreenChat />
      </EditorProvider>
    </>
  );
}

export default App;
