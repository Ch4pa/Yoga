import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SobreMi from "./Components/SobreMi/SobreMi";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  )

}

export default App;
