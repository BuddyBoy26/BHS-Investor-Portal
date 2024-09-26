import React from "react";
import { ArrowRight } from "lucide-react";
import { Link as RouteLink } from "react-router-dom";

const user = {
  name: "Antariksh",
  phone: 9748794406,
  email: "anta@gmail.com",
  DOB: "18/11/2005",
  address:
    "Indian Institute of Technology Kharagpur 721302, West Bengal, India",
  gender: "Male",
};

function Profile() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="lg:w-2/3 mx-auto flex flex-col bg-white shadow-md rounded-lg p-6 items-center content-center my-4">
        <img
          className="h-28 justify-center max-w-28 items-center rounded-full my-4"
          src="unnamed.gif"
        />
        <h1 className="text-4xl font-bold text-black mb-6">
          Welcome, {user.name}
        </h1>
        {/* <p className="text-gray-600 mb-6">
          Info about you and your preferences across Google services
        </p> */}

        <div className="bg-gray-100 p-4 rounded-lg w-5/6 flex flex-col items-center content-center">
          <h2 className="text-xl font-medium text-gray-900 my-5 text-center">
            Your profile information in Bhavya Investor Portal
          </h2>

          <div className="bg-white shadow-sm p-4 rounded-lg w-5/6 justify-center my-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Basic info
            </h3>

            <div className="border-b py-2 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Profile picture</p>
                <p className="text-gray-600">
                  A profile picture helps in better identification
                </p>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="unnamed.gif"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="border-b py-2">
              <p className="font-medium text-gray-800">Name</p>
              <p className="text-gray-600">{user.name}</p>
            </div>

            <div className="border-b py-2">
              <p className="font-medium text-gray-800">Birthday</p>
              <p className="text-gray-600">November 18, 2002</p>
            </div>

            <div className="py-2">
              <p className="font-medium text-gray-800">Gender</p>
              <p className="text-gray-600">{user.gender}</p>
            </div>
          </div>

          <div className="bg-white shadow-sm p-4 rounded-lg w-5/6 justify-center my-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Contact info
            </h3>

            <div className="border-b py-2">
              <p className="font-medium text-gray-800">Email</p>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <div className="border-b py-2">
              <p className="font-medium text-gray-800">Phone</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>
            <div className="py-2">
              <p className="font-medium text-gray-800">Address</p>
              <p className="text-gray-600">{user.address}</p>
            </div>
          </div>
          <div className="bg-white shadow-sm p-4 rounded-lg w-5/6 justify-center my-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Investment info
            </h3>
            <RouteLink
              to="/investment"
              className="font-medium text-gray-800 flex items-center"
            >
              View investment details{" "}
              <ArrowRight className="ml-1 w-5 justify-center align-middle text-gray-700" />
            </RouteLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
