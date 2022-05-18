import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import NotFound404 from "./components/NotFound404/NotFound404";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import Formulario from "./components/Formulario/Formulario";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/carvel-ecommerce" element={<ItemListContainer />} />
          <Route path="/carvel-ecommerce/category/:id" element={<ItemList />} />
          <Route
            path="/carvel-ecommerce/item/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/carvel-ecommerce/cart" element={<Cart />} />
          <Route path="/carvel-ecommerce/cart/form" element={<Formulario />} />
          <Route
            path="/carvel-ecommerce/cart/checkout"
            element={<Checkout />}
          />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
