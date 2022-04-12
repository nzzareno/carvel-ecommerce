import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carvel-ecommerce" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
