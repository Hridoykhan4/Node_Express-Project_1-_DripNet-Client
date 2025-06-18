import { Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuthValue from "../hooks/useAuthValue";
import useWindowScrollTop from "../hooks/useWindowScrollTop";
// import axios from "axios";

const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuthValue();
  const nav = useNavigate();
  useWindowScrollTop();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createNewUser(email, password)
      .then((res) => {
        updateUserProfile(name)
          .then(() => {
            const lastSignInTime = res?.user?.metadata?.lastSignInTime;
            const newUser = { name, email, lastSignInTime };

            // Using Axios
            /* axios.post('http://localhost:5000/users', newUser)
              .then(res => {
                console.log(res.data)
              }) */

            // Save To the database
            // Using Fetch
            fetch(`http://localhost:5000/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  alert("Successfully Added");
                  nav("/");
                }
              });
          })
          .catch((err) => {
            console.log("Error Occurred", err);
          });
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div className="pt-5 flex items-center justify-center px-4">
      <div className="w-full max-w-md border p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Full Name */}
          <div className="flex items-center border rounded-lg px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
            <User className="w-5 h-5 text-gray-500" />
            <input
              required
              type="text"
              name="name"
              placeholder="Full Name"
              className="ml-3 w-full outline-none bg-transparent"
            />
          </div>

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
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
