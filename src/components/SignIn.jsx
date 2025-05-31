import { Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import useAuthValue from "../hooks/useAuthValue";

const SignIn = () => {
    const {signInUser} = useAuthValue()
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email,password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.log(err)
        })
};

  return (
    <div className="pt-10 flex items-center justify-center px-4">
      <div className="w-full max-w-md border p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Login Account
        </h2>

        <form onSubmit={handleSignIn} className="space-y-5">
          
          {/* Email */}
          <div className="flex items-center border rounded-lg px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
            <Mail className="w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="ml-3 w-full outline-none bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
            <Lock className="w-5 h-5 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="ml-3 w-full outline-none bg-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
