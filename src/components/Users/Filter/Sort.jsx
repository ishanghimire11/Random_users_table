import { useContext, useRef } from "react";
import UserContext from "/src/context/context";

function Sort() {

	const { actions } = useContext(UserContext);
	const sortFormat = useRef();

	const handleSort = () => {
		return actions.sortUser(sortFormat.current.value.toLowerCase());
	};

	return (
		<div className="sort-container">
			<span className="opacity-50 mr-2">Sort by:</span>

			<select
				name="user"
				id="userSort"
				ref={sortFormat}
				onChange={handleSort}
				className="bg-gray-50 border border-gray-300 text-gray-900
          rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5"
			>
				<option value="default">Default</option>
				<option value="ascending">Ascending Name</option>
				<option value="descending">Descending Name</option>
			</select>
		</div>
	);
}

export default Sort;
