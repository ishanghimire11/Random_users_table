import { useEffect, useContext } from "react";
import UserContext from "/src/context/context";
import Loading from "/src/components/Common/Loading";
import Heading from "/src/components/Users/TableData/TableHeading/Headings";
import Body from "/src/components/Users/TableData/TableBody/Body";

const Table = () => {
	const { states, actions } = useContext(UserContext);

	const { data,loading } = states;

	useEffect(()=> {
		actions.refresh();
	},[]);

	return (
		<> {loading ? <Loading /> :
			<table
				id="userTable"
				className="w-full mt-8 border-separate border-spacing-y-2"
			>
				<Heading />
				<Body data={data} />
			</table>
		}
		</>
	);
};

export default Table;