import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Categories from "./pages/Categories";
import HomeScreen from "./pages/HomeScreen";
import Map from "./pages/Map";
import Register from "./pages/Register";
import Vendors from "./pages/Vendors";
import Support from "./pages/Support";
import Category from "./pages/Categorypage";
import Tnc from "./pages/tnc";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categories/*" element={<Categories />} />
          <Route path="/Fruits" element={<Category name="Fruits"/>}></Route>
          <Route path="/categories/Vegetables" element={<Category name="Vegetables"/>}></Route>
          <Route path="/categories/Greens" element={<Category name="Greens"/>}></Route>
          <Route path="/categories/Groceries" element={<Category name="Groceries"/>}></Route>
          <Route path="/categories/Accessories" element={<Category name="Accessories"/>}></Route>
          <Route path="/categories/HomeEssentials" element={<Category name="HomeEssentials"/>}></Route>
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tnc" element={<Tnc />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
