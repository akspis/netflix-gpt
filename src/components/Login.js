import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 bg-black bg-opacity-80 absolute mx-auto my-36 right-0 left-0 p-14 text-white rounded">
        <h1 className="font-semibold text-3xl">
          {isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignUp && (
          <input
            type="text"
            className="p-4 my-4 bg-gray-700 w-full rounded"
            placeholder="Name"
          />
        )}
        <input
          type="text"
          className="p-4 my-4 bg-gray-700 w-full rounded"
          placeholder="Eail Address"
        />
        <input
          type="password"
          className="p-4 my-4 bg-gray-700 w-full rounded"
          placeholder="Password Address"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded cursor-pointer">
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p>
          <span className="text-gray-500">New To Netflix? </span>
          <span className="cursor-pointer" onClick={handleSignUp}>
            Sign Up Now
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
