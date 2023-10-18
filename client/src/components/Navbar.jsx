import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="bg-[#0C356A] md:min-h-[10vh] h-[80px] w-full p-4 flex justify-between font-bold">
      <div className="flex items-center justify-center">
        <Link to="/">
          <span className="text-yellow-300 text-xl m-2">My BooKING</span>
        </Link>
      </div>
      <div className="flex gap-4 justify-between items-center">
        {user ? (
          <button
            onClick={handleLogout}
            className="text-yellow-300 text-md p-2 border-blue-500 border-2 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/register"
              className="text-yellow-300 text-md p-2 border-blue-500 border-2 rounded-lg"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-yellow-300 text-md p-2 border-blue-500 border-2 rounded-lg"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
