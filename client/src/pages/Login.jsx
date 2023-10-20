import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(`${baseURL}/auth/login`, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
      <div className="p-4 shadow-lg md:w-[1200px] md:h-[600px] h-[500px] w-[400px] flex justify-center items-center flex-col md:gap-8 gap-6">
        <h1 className="text-4xl md:text-3xl font-bold text-blue-600">
          Sign In
        </h1>
        <input
          className="md:h-[60px] md:text-lg md:w-[360px] rounded-md p-2 w-[300px] h-[50px]"
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          className="md:h-[60px] md:text-lg md:w-[360px] rounded-md p-2 w-[300px] h-[50px]"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          className="shadow-lg text-white md:w-[360px] md:h-[60px] h-[50px] w-[300px] bg-green-500 md:text-lg font-bold hover:bg-green-600 rounded-md"
          onClick={handleLogin}
          disabled={loading}
        >
          Login
        </button>
        <span>
          New to My BooKING?{" "}
          <Link
            className="text-blue-400 font-semibold hover:underline"
            to="/register"
          >
            Register
          </Link>
        </span>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
