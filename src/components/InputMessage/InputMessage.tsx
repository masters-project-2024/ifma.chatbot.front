import iconSend from "../../public/images/send.svg";
import { useEditor } from "../../Provider/Editor";
import { InputMessageStyled } from "./styled";
export const InputMessage = () => {
  const { message, handleInputMessage, handleKeyPress, handleSendQuestion } =
    useEditor();
  return (
    <InputMessageStyled>
      <textarea
        placeholder="Digite sua dúvida aqui..."
        onChange={handleInputMessage}
        onKeyUp={handleKeyPress}
        value={message}
        dir="auto"
        rows={1}
      />
      <button
        className="chatbox__send--footer send__button"
        onClick={() => handleSendQuestion()}
      >
        <img src={iconSend} alt="enviar mensagem" width={25} />
      </button>
    </InputMessageStyled>
  );
};
