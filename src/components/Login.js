import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/checkValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { AVATAR_URL, BG } from "../utils/constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const message = checkValidate(email.current?.value);
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
            photoURL: AVATAR_URL,
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
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
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
      <div className="fixed ">
        <img src={BG} alt="bg" className="h-screen object-cover md:w-screen" />
      </div>
      <Header />
      <form
        onSubmit={(e) => handleFormData(e)}
        className="w-full md:w-3/12 bg-black bg-opacity-80 absolute mx-auto my-36 right-0 left-0 p-14 text-white rounded"
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
