import { Heading, Notification } from "react-bulma-components";
import PropTypes from "prop-types";

const AlertDialog = ({ data, isOpen }) => {
  return (
    <Notification hidden={!isOpen} color={data.color}>
      <Heading>{data.title}</Heading>
      <Heading subtitle>{data.message}</Heading>
    </Notification>
  );
};

AlertDialog.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
  }),
  isOpen: PropTypes.bool,
};

AlertDialog.defaultProp = {
  data: {
    message: "",
    color: "danger",
    title: "",
  },
};

export const AlertDialogInitialValues = {
  message: "",
  color: "danger",
  title: "",
};

export default AlertDialog;
