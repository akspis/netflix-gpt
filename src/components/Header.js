import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import {
  AVATAR_URL,
  LOGO,
  SIDEBAR_IMG,
  SUPPORTED_LNAG,
} from "../utils/constants";
import { removeMovies, togglePageChange } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store?.gpt?.showGptPage);
  const user = useSelector((store) => store.user);

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
    removeMovies();
    hideSidebar();
  };

  const handleLangauageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const SideBar = () => (
    <div className="flex-col bg-slate-600 bg-opacity-70 relative top-24 md:hidden">
      <button
        className="bg-red-700 py-3 px-4 rounded-lg text-white m-2"
        onClick={handleGptSearch}
      >
        {showGpt ? "Home" : "Gpt Search"}
      </button>
      <p className="text-white font-xl px-7 pb-2" onClick={signOutUser}>
        Sign Out
      </p>
    </div>
  );

  const hideSidebar = () => setIsMobileSidebar(!isMobileSidebar);

  return (
    <>
      <div className="absolute z-10 bg-gradient-to-b from-black w-full flex md:flex-row justify-between">
        <div>
          <img src={LOGO} alt="logo" className="w-36 md:w-44 md:mx-7 my-3" />
        </div>
        {user && (
          <div className="mx-3 md:m-6 flex items-center">
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
            <div className="md:hidden flex items-center">
              <img
                src={AVATAR_URL}
                alt="profile"
                className="rounded-lg h-12 w-12 mx-1"
                onClick={hideSidebar}
              />
              <img src={SIDEBAR_IMG} className="w-4 h-4" />
            </div>
            <button
              className="hidden md:block bg-red-700 py-3 px-4 rounded-lg text-white m-2"
              onClick={handleGptSearch}
            >
              {showGpt ? "Home" : "Gpt Search"}
            </button>
            <img
              src={AVATAR_URL}
              alt="profile"
              className="hidden md:block h-12 w-12 rounded-lg"
            />
            <p
              className="hidden md:block text-white font-xl"
              onClick={signOutUser}
            >
              Sign Out
            </p>
          </div>
        )}
      </div>
      <div className="absolute right-2 top-[-20px]">
        {isMobileSidebar && <SideBar />}
      </div>
    </>
  );
};
export default Header;
