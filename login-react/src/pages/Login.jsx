import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/maakdreamlogo.png";


function Login() {
  const [role, setRole] = useState("Client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password.length >= 8;

  const isDisabled = !isValidEmail || !isValidPassword;

  return (


      <div className="min-h-screen flex items-center justify-center bg-[#355e8d] px-4">
        <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-2xl">

          <img
            src={logo}
            alt="MAAK DREAM DEVELOPERS"
            className="w-44 mx-auto mb-6"
          />

          <h1 className="text-2xl font-bold text-center mb-6">
            Login Form
          </h1>

          <form className="space-y-4">

            {/* Email */}
            <div>
              <label className="block font-bold mb-2 text-sm">
                Mail ID <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3 border rounded-md focus:ring-2 focus:ring-[#0078b0]"
              />

              {email && !isValidEmail && (
                <p className="text-red-500 text-xs mt-1">
                  Enter a valid email address
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block font-bold mb-2 text-sm">
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-3 border rounded-md focus:ring-2 focus:ring-[#0078b0]"
              />

              {password && !isValidPassword && (
                <p className="text-red-500 text-xs mt-1">
                  Password must be at least 8 characters
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className={`w-full py-3 rounded-md font-bold text-white transition duration-300 ${
                isDisabled
                  ? "bg-[#b7c4cf] cursor-not-allowed opacity-80"
                  : "bg-[#0078b0] hover:bg-[#006494]"
              }`}
            >
              Login as {role}
            </button>

            <div className="text-center mt-5">
              <Link to="/forget" className="text-[#336699] underline text-sm">
                Forget password?
              </Link>
            </div>

          </form>

        </div>
      </div>


  );
}

export default Login;
