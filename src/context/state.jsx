import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "/src/context/context";

const BASE_URL = import.meta.env.VITE_URL;

const SORT_OPTIONS = {
	ascending: "ascending",
	descending: "descending"
};

const DataState = ({ children }) => {
	const [ rawData, setRawData ] = useState([]);
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const refresh = async () => {
		setLoading(true);
		try {
			const response = await fetch(BASE_URL);
			const result = await response.json();
			const { results } = result;
			setRawData(results);
			setData(results);
			return results;
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		};
	};

	const searchUser = (query) => {
		const filterData = rawData.filter((user) => {
			const { name: { first, last } } = user;
			return (
				first.toLowerCase().includes(query)
				||
            	last.toLowerCase().includes(query)
			);
		});
		setData(filterData);
	};

	const sortUser = (sortValue) => {
		let sorted = [...data];

		if (sortValue === SORT_OPTIONS.ascending) {
			const ascSorted = sorted.sort((a, b) => a.name.first.localeCompare(b.name.first));
			setData(ascSorted);
		}
		else if (sortValue === SORT_OPTIONS.descending) {
			const descSorted = sorted.sort((a, b) => b.name.first.localeCompare(a.name.first));
			setData(descSorted);
		}
		else {
			setData(rawData);
		}
	};

	const states = {
		rawData,
		data,
		loading,
	};

	const actions = {
		refresh,
		searchUser,
		sortUser
	};

	return (
		<UserContext.Provider value={{
			states, actions
		}}>
			{children}
		</UserContext.Provider>
	);
};

DataState.propTypes = {
	children: PropTypes.object,
};

export default DataState;
