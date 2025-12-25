import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, logoutUser } from "../utils/auth";

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = getLoggedInUser();
    if (!loggedUser) {
      navigate("/login");
    } else {
      setUser(loggedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="h-screen flex flex-col">
      <div className="space-y-4">
        <h2 className="bg-white w-full p-4 font-semibold text-lg">
          Account Settings
        </h2>

        <div className="flex items-center gap-4 px-4">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60"
            alt="profile"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h5 className="font-semibold">{user.name}</h5>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>

        <p className="text-sm px-4 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          ratione quasi, animi dignissimos hic neque perspiciatis provident
          eligendi doloribus alias omnis autem vitae.
        </p>
      </div>

      <div className="mt-auto mb-6 mx-6 pt-6">
        <button
          onClick={handleLogout}
          className="w-full py-2 font-semibold text-white rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
