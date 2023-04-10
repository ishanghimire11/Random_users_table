import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "/src/components/RetrieveUser/GetUser";

const Refresh = () => {
	const { obtainUser } = useContext(UserContext);
	return (
		<>
			<button
				id="user-action-refresh"
				className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
				onClick={obtainUser}
				type="button"
			>
				<FontAwesomeIcon icon={faArrowsRotate} className="mr-1" />
        Refresh Users
			</button>
		</>
	);
};

export default Refresh;
