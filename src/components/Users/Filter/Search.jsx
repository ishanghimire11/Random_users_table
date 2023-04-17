import { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UserContext from "/src/context/context";

function Search() {
	const { actions } = useContext(UserContext);
	const searchInput = useRef();

	const handleSearch = () => {
		return actions.searchUser(searchInput.current.value.toLowerCase());
	};

	return (
		<div className="search-container relative">
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className="absolute left-4 top-4 text-lg opacity-50"
			/>

			<input
				id="search-user"
				type="text"
				ref={searchInput}
				onChange={handleSearch}
				className="bg-gray-50 rounded-md w-96 p-3 px-12 border border-gray-300 text-gray-900"
				placeholder="Search for user"
			/>
		</div>
	);
}

export default Search;
