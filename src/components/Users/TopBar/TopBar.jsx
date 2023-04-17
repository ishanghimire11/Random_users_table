import { useContext } from "react";
import UserContext from "src/context/context";
import Refresh from "/src/components/Users/TopBar/Refresh";

const TopBar = () => {
	const { states } = useContext(UserContext);
	return (
		<>
			<div
				className="topbar flex justify-between items-center border-b-2 border-b-gray-300 pb-4"
			>
				<p>Total users: {states.rawData.length}</p>
				<Refresh />
			</div>
		</>
	);
};

export default TopBar;