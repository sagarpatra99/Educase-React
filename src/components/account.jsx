import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="flex items-start flex-col space-y-4">
      <h2 className="bg-white w-full p-5 font-semibold">Account Settings</h2>
      <div className="flex items-center gap-6 px-4">
        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBmYWNlfGVufDB8fDB8fHww"
          alt="profile_img"
          className="h-20 w-20 rounded-full"
        />
        <div>
          <h5 className="font-semibold">{user.name}</h5>
          <p>{user.email}</p>
        </div>
      </div>
      <p className="px-4 py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        ratione quasi, animi dignissimos hic neque perspiciatis provident
        eligendi doloribus alias omnis autem vitae, perferendis explicabo
        tenetur quidem odio unde assumenda!
      </p>
      <button
        className="cursor-pointer text-center w-fits py-2 px-4 font-semibold text-white rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300 mt-80 mx-auto"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
