import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const Refresh = (props) => {
  const { obtainUser } = props;
  return (
    <>
      <button id="user-action-refresh"
        onClick={obtainUser}
        type="button"
        className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <FontAwesomeIcon icon={faArrowsRotate} className="mr-1"/> Refresh Users
      </button>
    </>
  );
};

Refresh.propTypes = {
  obtainUser: PropTypes.func
};

export default Refresh;
