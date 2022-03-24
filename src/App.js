import "./App.scss";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
