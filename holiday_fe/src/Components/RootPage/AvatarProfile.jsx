import profile from "../../svg/profile.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../Store/modal";
import { motion } from "framer-motion";

export default function AvatarProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { openProfile } = useSelector((state) => state.profile);

  function closeProfileModalHandler() {
    if (openProfile) {
      dispatch(profileActions.clickProfile(false));
    }
  }

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
            className="w-16 h-16 mb-2"
            onClick={closeProfileModalHandler}
          />
        </Link>
        <h1>{user.username}</h1>
        <h3>여행(n)</h3>
        <p>로그인/로그아웃</p>
      </motion.div>
    </>
  );
}
