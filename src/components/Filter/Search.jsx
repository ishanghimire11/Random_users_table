import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../RetrieveUser/GetUser";

function Search() {
  const [ searchValue, setSearchValue ] = useState("");
  const { userData, setSearchData } = useContext(UserContext);
  const [ filteredResultLength, setFilterResultLength ] = useState(
    userData.length,
  );
  const [ searchXMark, setSearchXmark ] = useState(false);

  const handleSearch = (inputValue) => {
    setSearchValue(inputValue);
    setSearchXmark(true);
    const FilterData = userData.filter((data) => {
      const {
        name: { first, last },
      } = data;
      return (
        first.toLowerCase().includes(inputValue)
        || last.toLowerCase().includes(inputValue)
      );
    });
    setSearchData(FilterData);
    setFilterResultLength(FilterData.length);
    if (inputValue === "") {
      setSearchXmark(false);
    }
  };

  const handleSearchClear = () => {
    setSearchValue("");
    setSearchXmark(false);
    setSearchData(userData);
    setFilterResultLength(userData.length);
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
        value={`${searchValue}`}
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-gray-50 rounded-md w-96 p-3 px-12 border border-gray-300
           text-gray-900"
        placeholder="Search for user"
      />
      <FontAwesomeIcon
        icon={faXmark}
        className={`absolute right-4 top-4 text-md opacity-50 
          ${searchXMark ? "block" : "hidden"} cursor-pointer`}
        onClick={handleSearchClear}
      />
      <p
        className={`mt-2 opacity-70 ${
          filteredResultLength === userData.length ? "hidden" : "block"
        }`}
      >
        Showing &apos;
        {filteredResultLength}
        out of
        {userData.length}
        &apos;results
      </p>
    </div>
  );
}

export default Search;
