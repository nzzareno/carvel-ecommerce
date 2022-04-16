import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";
import NotFound404 from "./components/NotFound404/NotFound404";
import Cart from "./components/Cart/Cart";
import CartContext from "./context/CartContext";

function App() {
  return (
    <>
      <CartContext>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/carvel-ecommerce" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemList />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </CartContext>
    </>
  );
}

export default App;
