import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/checkValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const Navigate = useRoutes();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const message = checkValidate(
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { email, displayName, photoURL, uid } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              Navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          Navigate("/browse");

          console.log("sign In", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => handleFormData(e)}
        className="w-3/12 bg-black bg-opacity-80 absolute mx-auto my-36 right-0 left-0 p-14 text-white rounded"
      >
        <h1 className="font-semibold text-3xl">
          {isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignUp && (
          <input
            ref={name}
            type="text"
            className="p-4 my-4 bg-gray-700 w-full rounded"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="p-4 my-4 bg-gray-700 w-full rounded"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          className="p-4 my-4 bg-gray-700 w-full rounded"
          placeholder="Password Address"
        />
        <p className="text-red-600 font-semibold text-xl">{errorMessage}</p>
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
