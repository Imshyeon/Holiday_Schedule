import GeneralButton from "../Components/UI/Login-Signup-Find/GeneralButton";
import { motion } from "framer-motion";
import { userLoginHandler, getUserInfo } from "../util/http";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/user";
import { useState } from "react";
import { ErrorMessage } from "../Components/UI/DataIndicator";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  async function submitLoginHandler(event) {
    console.log("click");
    event.preventDefault();
    const fd = new FormData(event.target);
    const userData = Object.fromEntries(fd.entries());
    const response = userLoginHandler(userData.userId, userData.userPW);
    const resData = await response;
    console.log(resData);

    if (resData.code === 200) {
      event.target.reset();
      const response = await getUserInfo(resData.access);
      console.log(response);
      dispatch(userActions.getUserInfoFromBackEnd(response));
      navigate("/");
    }

    if (resData.code === 500) {
      event.target.reset();
      setIsError(true);
    }
  }
  return (
    <>
      {isError && (
        <ErrorMessage message="로그인 중 오류가 발생했습니다. 다시 시도해주세요." />
      )}
      <section className="text-center h-fit py-28 max-xl:py-24">
        <article className="p-4">
          <h1 className="text-3xl font-extrabold">로그인하기</h1>
        </article>
        <article className="grid grid-cols-4 mt-4">
          <div className="col-start-2 col-span-2 justify-items-center bg-gray-50 rounded-xl p-5">
            <div className="using-SNS p-5 border-b-2 border-b-gray">
              <form
                className="flex flex-col items-center"
                onSubmit={submitLoginHandler}
              >
                <div className="flex flex-col gap-2 w-4/5">
                  <label htmlFor="userId" className="text-left">
                    아이디
                  </label>
                  <input
                    type="text"
                    id="userId"
                    name="userId"
                    className="rounded-xl p-2 w-full focus:outline-none border-b-2"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5 w-4/5">
                  <label htmlFor="userPW" className="text-left">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="userPW"
                    name="userPW"
                    className="rounded-xl p-2 w-full focus:outline-none border-b-2"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: [0.9, 1] }}
                  type="submit"
                  className="mt-10 mb-5 rounded-xl w-4/5 px-7 py-3 bg-make-schedule-btn"
                >
                  로그인하기
                </motion.button>
              </form>
            </div>
            <div className="using-General mt-5 p-5">
              <ul>
                <GeneralButton title="회원가입하기" destination="/signup" />
                <GeneralButton
                  title="아이디 / 비밀번호 찾기"
                  destination="/find"
                />
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
