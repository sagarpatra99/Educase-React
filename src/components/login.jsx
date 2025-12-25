import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, setLoggedInUser } from "../utils/auth";
import InputField from "./input-field";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="h-screen flex items-start flex-col p-6 space-y-4">
      <h2 className="text-2xl font-semibold">
        Signin to your PopX account
      </h2>
      <p className="mr-30k text-gray-400 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <InputField
        legend="Email Address"
        type="email"
        name="email"
        placeholder="Enter email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        legend="Password"
        type="password"
        name="password"
        placeholder="Hide password"
        onChange={(e) => setPassword(e.target.value)}
        eyeIcon={true}
      />
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
