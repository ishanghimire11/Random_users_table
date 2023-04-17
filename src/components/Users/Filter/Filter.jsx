import Search from "/src/components/Users/Filter/Search";
import Sort from "/src/components/Users/Filter/Sort";

const Filter = () => {
	return (
		<div
			className="filter-container mt-6 flex items-center justify-between"
		>
			<Sort />
			<Search />
		</div>
	);
};

export default Filter;