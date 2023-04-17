import Filter from "/src/components/Users/Filter/Filter";
import Table from "/src/components/Users/TableData/Table";
import TopBar from "/src/components/Users/TopBar/TopBar";

const Users = () => {
	return (
		<div
			className="main-container bg-gray-100 p-8 my-8 text-left rounded-md"
		>
			<TopBar />
			<Filter />
			<Table />
		</div>
	);
};

export default Users;