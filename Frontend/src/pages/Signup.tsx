import { useRef } from "react"

export const SignUp = () => {

  const usernameRef = useRef <HTMLInputElement | null> (null);
  const passwordRef = useRef <HTMLInputElement | null> (null);

  return (


    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          <div className="mb-4">
            <div  className="block text-sm font-medium text-gray-700">
              Username
            </div>
            <input
            ref={usernameRef}
              type="text"
              name="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <div className="block text-sm font-medium text-gray-700">
              Password
            </div>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
      </div>
    </div>
  );
};
