import "./App.scss";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./LocomotiveScroll.css";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1.5,
      }}
      containerRef={containerRef}
    >
      <section data-scroll-section ref={containerRef}>
        <Navbar />
        <ItemListContainer />
        <ItemDetailContainer />
      </section>
    </LocomotiveScrollProvider>
  );
}

export default App;
