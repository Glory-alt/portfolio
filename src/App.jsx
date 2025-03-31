import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./pages/Gallery";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div className=" flex min-h-screen flex-row font-lalezar">
      <Sidebar />
      <div className=" background h-screen flex-1 flex flex-col overflow-y-scroll hide-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
