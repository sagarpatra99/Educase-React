import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../utils/auth";
import InputField from "./input-field";

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    const { name, phone, email, password, company, agency } = formData;

    if (!name || !phone || !email || !password || !company || !agency) {
      alert("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim().toLowerCase())) {
      alert("Please enter a valid email address");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.trim())) {
      alert("Password must contain lowercase, uppercase and symbol");
      return;
    }

    const users = getUsers();
    if (users.some((u) => u.email === email.trim().toLowerCase())) {
      alert("Email already registered");
      return;
    }

    saveUsers([...users, { ...formData, email: email.trim().toLowerCase() }]);
    navigate("/login");
    alert("Account Created Successfully");
  };

  return (
    <div className="h-screen flex flex-col p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Create your PopX account</h2>

        <InputField
          legend="Full Name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />

        <InputField
          legend="Phone Number"
          name="phone"
          placeholder="4654658798"
          onChange={handleChange}
        />

        <InputField
          legend="Email Address"
          type="email"
          name="email"
          placeholder="Enter email address"
          onChange={handleChange}
        />

        <InputField
          legend="Password"
          type="password"
          name="password"
          placeholder="Hide password"
          onChange={handleChange}
          eyeIcon={true}
        />

        <InputField
          legend="Company Name"
          name="company"
          placeholder="Enter company name"
          onChange={handleChange}
        />

        <div className="space-y-2">
          <label className="font-medium">Are you an Agency?</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="Yes"
                onChange={handleChange}
                className="h-4 w-4"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="No"
                onChange={handleChange}
                className="h-4 w-4"
              />
              No
            </label>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-6">
        <button
          onClick={handleSignup}
          className="w-full py-2 font-semibold text-white rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
