import React from "react";
import { EditorProvider } from "./Provider";
import ChatInterface from "./components/ChatInterface";

function App() {
  return (
    <>
      <EditorProvider>
        <ChatInterface />
      </EditorProvider>
    </>
  );
}

export default App;
