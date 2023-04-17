import "/src/App.css";
import Users from "/src/components/Users/Users";
import DataState from "/src/context/state";

function App() {
	return (
		<div className="App">
			<DataState>
				<Users />
			</DataState>
		</div>
	);
}

export default App;
