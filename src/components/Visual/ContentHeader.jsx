import { Breadcrumb, Level } from "react-bulma-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContentHeader = ({ breadcrumbs, button }) => {
  return (
    <Level className="box">
      <Level.Side>
        <Level.Item>
          <Breadcrumb>
            {breadcrumbs.map((breadcrumb, index) => (
              <Breadcrumb.Item key={index}>
                {breadcrumb.linkTo === "" ? (
                  <a href="#">{breadcrumb.text}</a>
                ) : (
                  <Link to={breadcrumb.linkTo}>{breadcrumb.text}</Link>
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Level.Item>
      </Level.Side>
      <Level.Side align="right">
        <Level.Item>{button}</Level.Item>
      </Level.Side>
    </Level>
  );
};

ContentHeader.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      linkTo: PropTypes.string.isRequired,
    }).isRequired
  ),
  button: PropTypes.element,
};

export default ContentHeader;
