import "./App.css";
import Browse from "./components/browse/Browse";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Furniture from "./components/furniture/Furniture";
import Room from "./components/room/Room";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
function App() {
  return (
    <div className="app">
      <div className="app-wr">
        <Browse />
        <Navbar />
        <Furniture />
        <Room />
        <Footer />
        <Hero />
        <Product />
      </div>
    </div>
  );
}

export default App;
