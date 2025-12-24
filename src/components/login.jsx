import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, setLoggedInUser } from "../utils/auth";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    const users = getUsers();

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      alert("Invalid email or password");
      return;
    }

    setLoggedInUser(validUser);
    navigate("/account");
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex items-start flex-col p-6 space-y-4">
      <h2 className="text-2xl font-semibold my-4o pr-40">
        Signin to your PopX account
      </h2>
      <p className="mr-30 text-gray-400 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <fieldset className="border-2 border-gray-300 pl-4 w-full rounded-lg">
        <legend className="px-2 text-[#6C25FF] font-semibold">
          Email Address
        </legend>
        <input
          type="email"
          placeholder="Enter email address"
          className="outline-none mb-2 w-full pl-1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset className="border-2 border-gray-300 pl-4 w-full rounded-lg flex pr-4">
        <legend className="px-2 text-[#6C25FF] font-semibold">Password</legend>
        <input
          type={`${showPass ? "text" : "password"}`}
          placeholder={`${showPass ? "Show Password" : "Hide Password"}`}
          className="outline-none mb-2 w-full pl-1 pr-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div onClick={() => setShowPass(!showPass)}>
          {showPass ? (
            <Eye className="text-gray-500 cursor-pointer" />
          ) : (
            <EyeOff className="text-gray-500 cursor-pointer ml-2" />
          )}
        </div>
      </fieldset>
      <button
        disabled={!isFormValid}
        onClick={handleLogin}
        className={`text-center w-full py-2 mt-4 font-semibold rounded-lg transition-all duration-300
    ${
      isFormValid
        ? "bg-purple-600 text-white cursor-pointer hover:bg-purple-700"
        : "bg-[#CBCBCB] text-gray-500 cursor-not-allowed"
    }
  `}
      >
        Login
      </button>
    </div>
  );
}
