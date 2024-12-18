import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";



export const SignIn = () => {

  const usernameRef = useRef <HTMLInputElement | null> (null);
  const passwordRef = useRef <HTMLInputElement | null> (null);
  const navigate = useNavigate()

  async function signin(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

      const response = await axios.post(`${BACKEND_URL}/Signin`, {
          username,
          password
      })
      navigate("/Home")
      localStorage.setItem("Token", response.data.token)
      console.log(response.data.token);
      // alert("You are sigin")

  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
            ref= {usernameRef}
              type="text"
              name="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            ref={passwordRef}
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
          onClick={signin}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
      </div>
    </div>
  );
};
