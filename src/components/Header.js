import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { AVATAR_URL, LOGO, SUPPORTED_LNAG } from "../utils/constants";
import { togglePageChange } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store.gpt.showGptPage);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/404");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(togglePageChange());
  };

  const handleLangauageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full flex justify-between">
      <img src={LOGO} alt="logo" className="w-44 mx-7 my-3" />
      <div className="m-6 flex items-center">
        {showGpt && (
          <select
            className="py-3 px-4 rounded-lg text-white m-2 bg-gray-700"
            onChange={handleLangauageChange}
          >
            {SUPPORTED_LNAG.map((lang) => (
              <option value={lang.identifier} key={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="bg-red-700 py-3 px-4 rounded-lg text-white m-2"
          onClick={handleGptSearch}
        >
          {showGpt ? "Home" : "Gpt Search"}
        </button>
        <img src={AVATAR_URL} alt="profile" className="h-12 w-12" />
        <p className="text-white font-xl" onClick={signOutUser}>
          Sign Out
        </p>
      </div>
    </div>
  );
};
export default Header;
