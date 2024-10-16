import "./App.css";
import {Route ,  Routes } from "react-router-dom"
import NavBar from "./components/NavBar";
import MainCards from "./pages/MainCards";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/home" element={<MainCards />} />
        <Route path="/shoping" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
