import { useContext } from "react";
import Refresh from "/src/components/TopBar/Refresh";
import { UserContext } from "/src/components/RetrieveUser/GetUser";

const TopBar = () => {
	const { userData } = useContext(UserContext);
	return (
		<>
			<div className="total-users-container">
				<span className="opacity-50 text-xl">Total users:</span>
				<span className="font-semibold ml-1 text-xl">
					{userData.length}
				</span>
			</div>
			<Refresh />
		</>
	);
};

export default TopBar;