import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./User_Auth/login";
import Signup from "./User_Auth/signup";
import Profile from "./Profile";
import Assets from "./Assets";
import Contract from "./Contract";
import Logout from "./User_Auth/Logout";
import Help from "./help";
import Asset from "./Asset";
import Investment from "./Investment";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="w-full h-full bg-[#EBEBEB]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/asset" element={<Asset />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
