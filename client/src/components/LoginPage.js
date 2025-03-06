import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    onLogin(email);
  };
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white bg-opacity-95 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center text-center">
        <center><h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Fitness! 💪
        </h2>
        <p className="text-gray-600 mb-4">
          "Your only limit is you. Push yourself and get stronger!"
        </p><br/>
        <br/><p>Login to go</p><br/>        
        {error && <p className="text-red-500 text-sm mb-3 animate-pulse">{error}</p>}
        <div className="w-full mb-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div><br/>
        <div className="w-full mb-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-900"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <p className="text-blue-500 text-sm mb-4 hover:underline cursor-pointer">
          Forgot Password?
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Login
        </button>
        <p className="text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </p>       
        </center>
      </div>
    </div>
  );
};

export default LoginPage;
