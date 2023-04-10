import { useEffect, useContext } from "react";
import { UserContext } from "/src/components/RetrieveUser/GetUser";

function Sort() {
	const { searchData, setSortedArray, sortedArray } = useContext(UserContext);
	const ascending = "ascending";
	const descending = "descending";

	const handleSort = (sortValue) => {
		let sorted = [...sortedArray];
		if (sortValue === ascending) {
			sorted = sorted.sort((a, b) => a.name.first.localeCompare(b.name.first));
		}
		if (sortValue === descending) {
			sorted = sorted.sort((a, b) => b.name.first.localeCompare(a.name.first));
		}
		return setSortedArray(sorted);
	};

	useEffect(() => {
		setSortedArray(searchData);
	}, [searchData]);

	return (
		<div className="sort-container">
			<span className="opacity-50 mr-2">Sort by:</span>

			<select
				name="user"
				id="userSort"
				onChange={(e) => handleSort(e.target.value)}
				className="bg-gray-50 border border-gray-300 text-gray-900
          rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5"
			>
				<option value={ascending}>Ascending Name</option>
				<option value={descending}>Descending Name</option>
			</select>
		</div>
	);
}

export default Sort;
