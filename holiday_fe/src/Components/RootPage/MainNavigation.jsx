import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPlaneDeparture,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../../svg/profile.svg";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleBtnActions } from "../../Store/sidebarToggle";
import { profileActions } from "../../Store/modal";
import AvatarProfile from "./AvatarProfile";

export default function MainNavigation() {
  const { toggle } = useSelector((state) => state.toggle);
  const { openProfile } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function clickBurgerHandler() {
    dispatch(toggleBtnActions.toggleBtn());
  }

  function clickAvatarHandler() {
    if (openProfile) {
      dispatch(profileActions.clickProfile(false));
    } else {
      dispatch(profileActions.clickProfile(true));
    }
  }

  function closeAvatarHandler() {
    if (openProfile) {
      dispatch(profileActions.clickProfile(false));
    }
  }

  return (
    <>
      <header
        className="z-20 bg-main-side fixed w-full right-0 max-xl:w-full"
        onClick={closeAvatarHandler}
      >
        <nav className="h-1/6">
          <ul
            id="full-screen"
            className="flex flex-row text-center max-xl:hidden"
          >
            <h1 className="text-xl font-bold p-2 px-9">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  style={{ color: "#001e57" }}
                  className="mr-1"
                />
                TIME TO TRAVEL
              </Link>
            </h1>
            <motion.li className="basis-1/12 p-2" whileHover={{ scale: 1.08 }}>
              <Link to="tutorial" className="font-semibold">
                시작하기
              </Link>
            </motion.li>
            <motion.li className="basis-1/12 p-2" whileHover={{ scale: 1.08 }}>
              <Link to="article/:id" className="font-semibold">
                Article
              </Link>
            </motion.li>
            <div className="absolute top-1 right-3">
              <div className="relative">
                <button onClick={clickAvatarHandler} className="z-10">
                  <img
                    className="flex-initial max-w-9 max-h-9 text-right rounded-full"
                    src={user.image || profile}
                    alt="logo"
                  />
                </button>
              </div>
              {openProfile && <AvatarProfile open={openProfile} />}
            </div>
          </ul>
          <ul id="burger" className="xl:hidden max-xl:visible h-1/6">
            <li className="p-4 grid grid-cols-3 bg-main-side/20 items-start">
              <motion.button
                id="navbar-toggle-btn"
                className="justify-self-start focus:outline-none"
                onClick={clickBurgerHandler}
                whileHover={{ scale: 1.1 }}
                animate={{ opacity: 1, rotate: toggle ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {!toggle && <FontAwesomeIcon icon={faBars} />}
                {toggle && <FontAwesomeIcon icon={faX} />}
              </motion.button>
              <div className="grid justify-center">
                <h1 className="text-xl font-bold text-center inline-block justify-self-center">
                  <Link to="/">
                    <FontAwesomeIcon
                      icon={faPlaneDeparture}
                      style={{ color: "#001e57" }}
                      className="mr-1"
                    />
                    TIME TO TRAVEL
                  </Link>
                </h1>
                {toggle && <Sidebar isExpended={toggle} />}
              </div>
            </li>
            <div className="absolute top-2 right-3">
              <div className="relative">
                <button onClick={clickAvatarHandler} className="z-10">
                  <img
                    className="flex-initial max-w-10 max-h-10 text-right rounded-full"
                    src={user.image || profile}
                    alt="profile img"
                  />
                </button>
              </div>
              {openProfile && <AvatarProfile open={openProfile} />}
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
