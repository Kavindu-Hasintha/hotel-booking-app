import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import AddRoom from "./components/room/AddRoom";
import ExsitingRooms from "./components/room/ExsitingRooms";
import EditRoom from "./components/room/EditRoom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExsitingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </>
  );
}

export default App;
