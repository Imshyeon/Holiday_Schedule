import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-main-side via-main-footer to-gray-300 h-26">
      <div className="flex flex-row justify-between sticky bottom-0">
        <ul className="p-5 ml-5">
          <motion.li className="my-3" whileHover={{ scale: 1.08 }}>
            <Link to="tutorial" className="font-semibold">
              시작하기
            </Link>
          </motion.li>
          <motion.li className="my-3" whileHover={{ scale: 1.08 }}>
            <Link to="article/:id" className="font-semibold">
              Article
            </Link>
          </motion.li>
        </ul>
        <div className="flex flex-row p-5 items-end">
          <p className="items-center p-2">CONTRIBUTORS</p>
          <img className="App-logo max-w-10 max-h-10" src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
