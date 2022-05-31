
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Android from "./navigation/Android";
import Categories from "./navigation/Categories";
import Chaneel from "./navigation/Chaneel";
import Home from "./navigation/Home";
import Organization from "./navigation/Organization";
import Python from "./navigation/Python";
import Service from "./navigation/Service";
import Testing from "./navigation/Testing";
import Web from "./navigation/Web";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/chaneel" element={<Chaneel/>} />
      <Route path="/testing" element={<Testing/>} />
      <Route path="service">
          <Route index element={<Service/>} />
        <Route path="web" element={<Web />} />
        <Route path="android" element={<Android/>} />
        <Route path="python" element={<Python/>} />
        </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
