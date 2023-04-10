import { useEffect, useState, createContext } from "react";
import Refresh from "/src/components/TopBar/Refresh";
import Sort from "/src/components/Filter/Sort";
import Heading from "/src/components/TableData/TableHeading/Headings";
import Search from "/src/components/Filter/Search";

const BASE_URL = "https://randomuser.me/api/?results=10";
export const UserContext = createContext(null);

function GetUser() {
  const [ userData, setUserData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ searchData, setSearchData ] = useState([]);
  const [ sortedArray, setSortedArray ] = useState([]);

  const obtainUser = async () => {
    setLoading(true);
    const abortController = new AbortController();
    try {
      const res = await fetch(BASE_URL, {
        signal: abortController.signal,
      });
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
      }}
    >
      {loading ? (
        <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt="loading..."
          className="text-center select-none m-auto"
        />
      ) : (
        <div className="main-container bg-gray-100 p-8 my-8 text-left rounded-md">
          <div className="topbar flex justify-between items-center border-b-2 border-b-gray-300 pb-4">
            <div className="total-users-container">
              <span className="opacity-50 text-xl">Total users:</span>
              <span className="font-semibold ml-1 text-xl">
                {userData.length}
              </span>
            </div>
            <Refresh obtainUser={obtainUser} />
          </div>

          <div className="overview-container mt-6 flex items-center justify-between">
            <Sort />
            <Search />
          </div>

          <table
            id="userTable"
            className="w-full mt-8 border-separate border-spacing-y-2"
          >
            <Heading />
          </table>
        </div>
      )}
    </UserContext.Provider>
  );
}

export default GetUser;
