import { useEffect, useState, createContext } from "react";
import Sort from "/src/components/Filter/Sort";
import Search from "/src/components/Filter/Search";
import Heading from "/src/components/TableData/TableHeading/Headings";
import Body from "/src/components/TableData/TableBody/Body";
import TopBar from "src/components/TopBar/TopBar";
import Loading from "src/components/Utils/Loading";

const BASE_URL = import.meta.env.VITE_URL;
export const UserContext = createContext();

function GetUser() {
	const [ userData, setUserData ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ searchData, setSearchData ] = useState([]);
	const [ sortedArray, setSortedArray ] = useState([]);

	const obtainUser = async () => {
		setLoading(true);
		try {
			const res = await fetch(BASE_URL);
			const data = await res.json();
			setUserData(data.results);
			setLoading(false);
			setSearchData(data.results);
			setSortedArray(data.results);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		obtainUser();
	}, []);

	return (
		<UserContext.Provider
			value={{
				loading,
				userData,
				searchData,
				setSearchData,
				sortedArray,
				setSortedArray,
				obtainUser,
			}}
		>
			{loading ? (
				<Loading />
			) : (
				<div
					className="main-container bg-gray-100 p-8 my-8 text-left rounded-md"
				>
					<div
						className="topbar flex justify-between items-center border-b-2 border-b-gray-300 pb-4"
					>
						<TopBar />
					</div>

					<div
						className="filter-container mt-6 flex items-center justify-between"
					>
						<Sort />
						<Search />
					</div>

					<table
						id="userTable"
						className="w-full mt-8 border-separate border-spacing-y-2"
					>
						<Heading />
						<Body />
					</table>
				</div>
			)}
		</UserContext.Provider>
	);
}

export default GetUser;
