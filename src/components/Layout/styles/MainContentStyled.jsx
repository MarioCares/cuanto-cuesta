import styled from "@emotion/styled";
import { Hero } from "react-bulma-components";

const WelcomeStyled = styled(Hero)`
  background: #36d1dc;
  background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  background: linear-gradient(to right, #5b86e5, #36d1dc);
  color: hsl(192, 17%, 99%);
`;

const InfoCardsStyled = styled.div`
  margin: 1rem 0;
  font-weight: 300;
  color: #8f99a3;
`;
export { WelcomeStyled, InfoCardsStyled };
