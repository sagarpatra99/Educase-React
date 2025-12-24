import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../utils/auth";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { name, phone, email, password, company, agency } = formData;

    if (!name || !phone || !email || !password || !company || !agency) {
      alert("All fields are required");
      return;
    }
    const normalizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    const normalizedPassword = password.trim();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(normalizedPassword)) {
      alert("Password must contain lowercase, uppercase, symbol");
      return;
    }

    const users = getUsers();
    const emailExists = users.some((u) => u.email === email);

    if (emailExists) {
      alert("Email already registered");
      return;
    }

    users.push(formData);
    saveUsers(users);

    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-start flex-col p-6 space-y-4">
      <h2 className="text-2xl font-bold pt-4 pr-48">
        Create your PopX account
      </h2>
      <fieldset className="border-2 border-gray-300 pl-4 w-full rounded-lg">
        <legend className="px-2 text-[#6C25FF] font-semibold required">
          Full Name
        </legend>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="outline-none mb-2 w-full pl-1"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="border-2 border-gray-300 pl-4 w-full rounded-lg">
        <legend className="px-2 text-[#6C25FF] font-semibold required">
          Phone Number
        </legend>
        <input
          type="text"
          name="phone"
          placeholder="Enter number"
          className="outline-none mb-2 w-full pl-1"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="border-2 border-gray-300 pl-4 w-full rounded-lg">
        <legend className="px-2 text-[#6C25FF] font-semibold required">
          Email Address
        </legend>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          className="outline-none mb-2 w-full pl-1"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="border-2 border-gray-300 pl-4 w-full rounded-lg">
        <legend className="px-2 text-[#6C25FF] font-semibold required">
          Password
        </legend>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="outline-none mb-2 w-full pl-1"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="border-2 border-gray-300 pl-4 w-full rounded-lg">
        <legend className="px-2 text-[#6C25FF] font-semibold required">
          Company Name
        </legend>
        <input
          type="text"
          name="company"
          placeholder="Enter company name"
          className="outline-none mb-2 w-full pl-1"
          onChange={handleChange}
        />
      </fieldset>
      <label htmlFor="" className="required">
        Are you an Agency?
      </label>
      <div className="flex items-center gap-5">
        <div className="space-x-2">
          <input
            type="radio"
            name="agency"
            value="Yes"
            className="h-5 w-5"
            onChange={handleChange}
          />
          <span>Yes</span>
        </div>
        <div className="space-x-2">
          <input
            type="radio"
            name="agency"
            value="No"
            className="h-5 w-5"
            onChange={handleChange}
          />
          <span name="agency">No</span>
        </div>
      </div>
      <button
        className="cursor-pointer text-center w-full py-2 font-semibold text-white rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-300 mt-20"
        onClick={handleSignup}
      >
        Create Account
      </button>
    </div>
  );
}
