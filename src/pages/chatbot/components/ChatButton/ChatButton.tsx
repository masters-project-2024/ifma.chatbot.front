import { useState } from "react";
import iconChat from "../../../../public/images/chatbox-icon.svg";
import { ChatButtonStyled } from "./styled";
import { useEditor } from "../../../../Provider/Editor";

export const ChatButton = () => {
  const { handleOpenChat } = useEditor();

  return (
    <ChatButtonStyled>
      <button onClick={() => handleOpenChat()} type="button">
        <img src={iconChat} alt="icone do chat" />
      </button>
    </ChatButtonStyled>
  );
};
