import profile from "../../svg/profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../Store/modal";
import { motion } from "framer-motion";
import { userLogoutHandler } from "../../util/http";

export default function AvatarProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { openProfile } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  function closeProfileModalHandler() {
    if (openProfile) {
      dispatch(profileActions.clickProfile(false));
    }
  }

  function logoutHandler() {
    const token = localStorage.getItem("userRefresh");
    console.log(token);
    userLogoutHandler(token);
    navigate("/");
  }

  console.log(user);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute z-10 mt-auto right-0 bg-white border px-5 py-3 rounded-2xl min-w-52 h-fit text-center flex flex-col items-center"
      >
        <Link to="user">
          <img
            src={user.image || profile}
            alt="user-img"
            className="w-16 h-16 mb-2 rounded-full"
            onClick={closeProfileModalHandler}
          />
        </Link>
        <h1>{user.username}</h1>
        <h3>여행(n)</h3>
        <Link to={!user.username ? "login" : "/"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: [0.9, 1] }}
            className="mt-2 bg-main-side py-2 px-4 rounded-lg"
            onClick={user.username ? logoutHandler : null}
          >
            {user.username ? "로그아웃하기" : "로그인하기"}
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
}
