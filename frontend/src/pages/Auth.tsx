import { useState } from "react";
import { motion } from "framer-motion";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 text-lg font-semibold focus:outline-none ${
              isLogin ? "border-yellow-500 text-yellow-500 border-b-2" : ""
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold focus:outline-none ${
              !isLogin ? "border-yellow-500 text-yellow-500 border-b-2" : ""
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <motion.div
          key={isLogin ? "login" : "register"}
          initial={{ opacity: 0, x: isLogin ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isLogin ? -100 : 100 }}
          transition={{ duration: 0.5 }}
        >
          {isLogin ? (
            <form action="" className="space-y-4">
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-500"
                />
              </div>

              <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors">
                {" "}
                Login
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-500"
                />
              </div>
              <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors">
                Register
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
