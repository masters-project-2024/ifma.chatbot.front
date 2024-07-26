import { useEditor } from "../../../../Provider/Editor";
import iconSend from "../../../../public/images/send.svg";
import { InputMessageStyled } from "./styled";
import { useEffect, useRef, useState } from "react";
export const InputMessage = () => {
  const {
    message,
    handleInputMessage,
    handleKeyPress,
    handleSendQuestion,
    open,
  } = useEditor();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message, open]);

  return (
    <InputMessageStyled>
      <textarea
        ref={textareaRef}
        placeholder="Digite sua dúvida aqui..."
        onChange={handleInputMessage}
        onKeyUp={handleKeyPress}
        value={message}
        rows={1}
      />
      <button className="button__send" onClick={() => handleSendQuestion()}>
        <img src={iconSend} alt="enviar mensagem" width={25} />
      </button>
    </InputMessageStyled>
  );
};
