import { Content, Heading, Hero } from "react-bulma-components";
import PropTypes from "prop-types";

const ErrorPanel = ({ title, subtitle }) => (
  <Hero size="fullheight" color="danger">
    <Hero.Body>
      <Content>
        <Heading>{title}</Heading>
        <Heading subtitle>{subtitle}</Heading>
      </Content>
    </Hero.Body>
  </Hero>
);

ErrorPanel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ErrorPanel;
