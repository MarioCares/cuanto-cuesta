import {
  Columns,
  Container,
  Content,
  Footer,
  Section,
} from "react-bulma-components";
import { Outlet } from "react-router-dom";

const Root = () => (
  <>
    <Section>
      <Container>
        <Columns>
          <Columns.Column size="3">asd</Columns.Column>
          <Columns.Column size="9">
            <Outlet />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
    <Footer>
      <Container>
        <Content textAlign="center">
          <p>
            <strong>Cuanto Cuesta</strong> por{" "}
            <a href="https://mariocares.dev" target="_blank" rel="noreferrer">
              Mario Cares
            </a>
          </p>
        </Content>
      </Container>
    </Footer>
  </>
);

export default Root;
