import React from "react";

const Login = () => {
  return (
    <div className="bg-yellow-300 h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 w-2/3 mx-auto flex justify-center items-center">
        <div className="w-1/2 pr-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Welcome to</h1>
            <h2 className="text-3xl font-semibold">Bhavya Haulage Services</h2>
          </div>
          <img src="logo_bhavya.png" />
        </div>
        <div className="lg:w-2/5 pl-8 h-full">
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Investors' Login
            </h3>
            <form>
              <div className="mb-4">
                <label className="block font-semibold pb-1.5 pl-1.5">
                  Email ID
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-1.5 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your Email ID"
                />
              </div>
              <div className="mb-4">
                <label className="block pb-1.5 pl-1.5 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-1.5 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="w-full flex justify-center mt-10">
                <button
                  type="submit"
                  className="w-1/3 object-center  bg-[#00D816] text-white py-2 rounded-lg hover:bg-green-600"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p>
                <a href="/signup" className="text-blue-500 hover:underline">
                  Don't have an account?Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
