import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./userAuth/Login";
import Signup from "./userAuth/Signup";
import Profile from "./Profile";
import Assets from "./Assets";
import Contract from "./Contract";
import Logout from "./userAuth/Logout";
import Help from "./help";
import Asset from "./Asset";
import Investment from "./Investment";
import NavBar from "./NavBar";
import Trips from "./Trips";
import ContactForm from "./contact";
// <<<<<<< HEAD
// =======

// >>>>>>> b0ccbed (investment ready 2)
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="w-full h-full bg-[#EBEBEB]">
          <Routes>
            <Route path="/" element={<Investment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Investment />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/asset" element={<Asset />} />
            <Route path="/help" element={<Help />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
