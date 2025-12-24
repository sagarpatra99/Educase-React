import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import Account from "./components/account";

export default function App() {
  return (
    <div className="max-w-100 min-h-screen bg-[#F7F8F9] mx-auto border border-gray-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}
