import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/maakdreamlogo.png";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(null);

  const validEmails = [
    "client@gmail.com",
    "member@gmail.com",
    "admin@gmail.com",
    "test@gmail.com"
  ];

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isDisabled = !isValidEmail;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validEmails.includes(email)) {
      setNotification({ type: "success", message: "Code sent to your email" });
    } else {
      setNotification({ type: "error", message: "Email not found" });
    }

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#355e8d] px-4 relative">

      {notification && (
        <div
          className={`absolute top-5 right-5 px-6 py-3 rounded-lg text-white shadow-lg ${
            notification.type === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-2xl">

        <img src={logo} alt="MAAK DREAM DEVELOPERS" className="w-44 mx-auto mb-6" />

        <h1 className="text-2xl font-bold text-center mb-6">
          Forget Password
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block font-bold mb-2 text-sm">
              Enter your email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
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

          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-3 rounded-md font-bold text-white transition duration-300 ${
              isDisabled
                ? "bg-[#b7c4cf] cursor-not-allowed opacity-80"
                : "bg-[#0078b0] hover:bg-[#006494]"
            }`}
          >
            Submit
          </button>

        </form>

        <div className="text-center mt-5">
          <Link to="/" className="text-[#336699] underline text-sm">
            Back to Login page
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ForgetPassword;