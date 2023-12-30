import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import AddRoom from "./components/room/AddRoom";
import ExsitingRooms from "./components/room/ExsitingRooms";
import EditRoom from "./components/room/EditRoom";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExsitingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
