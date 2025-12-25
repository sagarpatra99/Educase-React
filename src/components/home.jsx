import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen w-full mx-auto bg-[#F7F8F9] flex flex-col justify-end p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Welcome to PopX</h2>

        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <Link
          to="/signup"
          className="block text-center w-full py-2 font-semibold text-white rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Create Account
        </Link>

        <Link
          to="/login"
          className="block text-center w-full py-2 font-semibold text-purple-700 rounded-lg bg-purple-300 hover:bg-purple-400 transition"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}
