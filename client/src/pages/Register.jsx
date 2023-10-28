import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContext } from "../context/RegisterContext";
import axios from "axios";

const Register = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    username: undefined,
    password: undefined,
  });

  const { error, loading, dispatch } = useContext(RegisterContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTRATION_START" });
    try {
      const response = await axios.post(
        `${baseURL}/auth/register`,
        credentials
      );
      dispatch({ type: "REGISTRATION_SUCCESS", payload: response.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "REGISTRATION_FAILURE", payload: error.response.data });
    }
  };

  const handleChange = (e) => {
    setCredentials((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
      <div className="p-4 shadow-lg md:w-[1200px] md:h-[600px] h-[500px] w-[400px] flex justify-center items-center flex-col md:gap-8 gap-6">
        <h1 className="text-4xl md:text-3xl font-bold text-blue-600">
          Register
        </h1>
        <input
          onChange={handleChange}
          className="md:h-[60px] md:text-lg md:w-[360px] rounded-md p-2 w-[300px] h-[50px]"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          onChange={handleChange}
          className="md:h-[60px] md:text-lg md:w-[360px] rounded-md p-2 w-[300px] h-[50px]"
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          onChange={handleChange}
          className="md:h-[60px] md:text-lg md:w-[360px] rounded-md p-2 w-[300px] h-[50px]"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button
          onClick={handleRegister}
          disabled={loading}
          className="shadow-lg text-white md:w-[360px] md:h-[60px] h-[50px] w-[300px] bg-green-500 md:text-lg font-bold hover:bg-green-600 rounded-md"
        >
          Register
        </button>
        <span>
          Already a user of My BooKING?{" "}
          <Link
            className="text-blue-400 font-semibold hover:underline"
            to="/login"
          >
            Login
          </Link>
        </span>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
