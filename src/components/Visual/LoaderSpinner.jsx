import { Content, Heading, Hero } from "react-bulma-components";
import PropTypes from "prop-types";

const LoaderSpinner = ({ title, subtitle }) => (
  <Hero size="fullheight" color="primary">
    <Hero.Body>
      <Content>
        <Heading>{title}</Heading>
        <Heading subtitle>{subtitle}</Heading>
      </Content>
    </Hero.Body>
  </Hero>
);

LoaderSpinner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default LoaderSpinner;
