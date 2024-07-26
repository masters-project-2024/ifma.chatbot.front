import { SpinnerStyled } from "./styled";

export const Spinner = () => {
  return (
    <SpinnerStyled>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </SpinnerStyled>
  );
};
