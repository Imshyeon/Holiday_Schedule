import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck as afterCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck as beforeCheck } from "@fortawesome/free-regular-svg-icons";
import GeneralButton from "../Components/UI/Login-Signup-Find/GeneralButton";

export default function SignupPage() {
  return (
    <section className="text-center h-fit p-16 max-xl:p-20 max-xl:h-screen">
      <article className="p-4">
        <h1 className="text-3xl font-extrabold">회원가입하기</h1>
      </article>
      <article className="grid grid-cols-4 mt-4 mb-12">
        <div className="col-start-2 col-span-2 justify-items-center bg-gray-50 rounded-xl p-5">
          <div className="using-SNS mt-8 p-5 border-b-2 border-b-gray">
            {/* 회원가입 - 1 */}
            {/* <form className="flex flex-col justify-center items-center">
              <button className="rounded-xl px- py-3 mb-6 w-3/5 bg-gray-200/90 hover:bg-gray-300">
                <li className="flex flex-row items-center justify-center">
                  <FontAwesomeIcon icon={beforeCheck} className="w-5 mr-2" />
                  <p className="align-middle ml-2">약관동의 하기</p>
                </li>
              </button>
              <div className="w-3/5 flex flex-col mb-6">
                <label htmlFor="user-auth" className="block text-left mb-2">
                  본인인증(이메일/휴대폰){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="user-auth"
                  type="text"
                  className="rounded-xl px-7 py-3 mb-6 w-full focus:outline-none focus:border-b-[1px]"
                />
              </div>
              <button className="rounded-xl px-7 py-3 mb-6 w-3/5 bg-gray-300/90 hover:bg-submit-btn">
                <li className="flex flex-row items-center justify-center">
                  <p className="align-middle ml-2">다음</p>
                </li>
              </button>
            </form> */}

            {/* 회원가입 - 2 */}
            <form className="flex flex-col justify-center items-center">
              <div className="w-3/5 flex flex-col mb-6">
                <label htmlFor="user-auth" className="block text-left mb-2">
                  아이디
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="user-auth"
                  type="text"
                  className="rounded-xl px-7 py-3 mb-4 w-full focus:outline-none focus:border-b-[1px]"
                />
                <label htmlFor="user-auth" className="block text-left mb-2">
                  비밀번호
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="user-auth"
                  type="password"
                  className="rounded-xl px-7 py-3 mb-4 w-full focus:outline-none focus:border-b-[1px]"
                />
                <label htmlFor="user-auth" className="block text-left mb-2">
                  비밀번호 확인
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="user-auth"
                  type="password"
                  className="rounded-xl px-7 py-3 mb-6 w-full focus:outline-none focus:border-b-[1px]"
                />
              </div>
              <GeneralButton
                title="완료"
                classes="bg-gray-300/90 hover:bg-submit-btn"
              />
            </form>
          </div>
          <div className="using-General mt-5 p-3">
            <ul>
              <GeneralButton title="로그인하기" />
              <GeneralButton title="아이디 / 비밀번호 찾기" />
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
