import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import UserContext from "/src/context/context";

const Refresh = () => {
	const { states, actions } = useContext(UserContext);

	const handleRefresh = () => {
		return actions.refresh();
	};

	const disabled = states.loading;

	return (
		<>
			<button
				id="user-action-refresh"
				className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
				onClick={handleRefresh}
				type="button"
				disabled={disabled}
			>
				<FontAwesomeIcon icon={faArrowsRotate} className="mr-1" />
        		Refresh Users
			</button>
		</>
	);
};

export default Refresh;
