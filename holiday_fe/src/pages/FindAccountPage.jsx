import GeneralButton from "../Components/UI/Login-Signup-Find/GeneralButton";
import { motion } from "framer-motion";

export default function FindAccountPage() {
  return (
    <section className="text-center h-fit p-16 max-xl:p-20 max-xl:h-screen">
      <article className="p-4">
        <h1 className="text-3xl font-extrabold">아이디 / 비밀번호 찾기</h1>
      </article>
      <article className="grid grid-cols-4 mt-4">
        <div className="col-start-2 col-span-2 justify-items-center bg-gray-50 rounded-xl p-5">
          <div className="using-SNS mt-8 p-5 border-b-2 border-b-gray">
            <form className="flex flex-col justify-center items-center">
              <div className="w-3/5 flex flex-col mb-6">
                <label htmlFor="user-auth" className="block text-left mb-2">
                  본인인증(이메일/핸드폰)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="user-auth"
                  type="text"
                  className="rounded-xl px-7 py-3 mb-4 w-full focus:outline-none focus:border-b-[1px]"
                />
              </div>
              <motion.button className="w-full">다음</motion.button>
            </form>
          </div>
          <div className="using-General mt-5 p-5">
            <ul>
              <GeneralButton title="로그인하기" destination="/login" />
              <GeneralButton title="회원가입하기" destination="/signup" />
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
