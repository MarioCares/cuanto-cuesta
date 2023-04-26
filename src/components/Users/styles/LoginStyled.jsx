import styled from "@emotion/styled";
import { Hero } from "react-bulma-components";

const LoginBox = styled.div`
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 8px 8px 15px #d9dde6, -8px -8px 15px #eff5fe;
`;

const HeroBodyBox = styled(Hero.Body)`
  display: flex;
  justify-content: center;
  background: #fff;
`;

export { LoginBox, HeroBodyBox };
