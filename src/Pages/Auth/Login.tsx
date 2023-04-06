import React, { useState } from "react";
import { AuthServiceClient } from "../../generated/AuthServiceClientPb";
import { LoginRequest } from "../../generated/auth_pb";
import AuthInput from "../../reusableComponents/AuthInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../../Features/Login/LoginReducer";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const authService = new AuthServiceClient("http://localhost:8080", null);

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login function
  const handleLogin = () => {
    const _request = new LoginRequest();
    _request.setUsername(username);
    _request.setPassword(password);

    /** make a login request using the payload provided */
    authService.login(_request, {}, (err: any, response: any) => {
      if (err) {
        toast("Something went wrong!!");
      } else {
        const accessToken = response.array[2];
        const refreshToken = response.array[3];

        //store tokens using cookies for security purpose

        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken);
        dispatch(login({ username, password, accessToken, refreshToken }));
        navigate("/dashboard");
      }
    });
  };
  return (
    <div className="max-h-screen mt-8 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <ToastContainer />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <AuthInput
                name="username"
                type="text"
                autoComplete="username"
                required
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                value={username}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="username"
              />
            </div>
            <div>
              <AuthInput
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                label="Password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="password"
                value={password}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
