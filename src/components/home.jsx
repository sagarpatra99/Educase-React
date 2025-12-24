import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-start flex-col p-6 space-y-4">
      <h2 className="pt-120 text-2xl font-bold my-4o">Welcome to PopX</h2>
      <p className="mr-30 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Link
        to="/signup"
        className="text-center w-full py-2 font-semibold text-white rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-300"
      >
        <button className="cursor-pointer">Create Account</button>
      </Link>
      <Link
        to="/login"
        className="text-center w-full py-2 font-semibold text-whites rounded-lg bg-purple-300 hover:bg-purple-400 transition-all duration-300"
      >
        <button className="cursor-pointer">Already Registered? Login</button>
      </Link>
    </div>
  );
}
