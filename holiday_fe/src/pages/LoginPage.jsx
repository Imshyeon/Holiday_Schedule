import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faN } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginPage() {
  return (
    <section className="text-center h-fit max-xl:h-screen">
      <article className="p-4 mt-8">
        <h1 className="text-3xl font-extrabold">로그인하기</h1>
      </article>
      <article className="grid grid-cols-4 mt-4">
        <div className="col-start-2 col-span-2 justify-items-center bg-gray-50 rounded-xl p-5">
          <div className="using-SNS mt-8 p-5 border-b-2 border-b-gray">
            <ul>
              <button className="rounded-xl px- py-3 mb-6 w-3/5 bg-yellow-300/70 hover:bg-yellow-300/90">
                <li className="flex flex-row items-center justify-center">
                  <FontAwesomeIcon icon={faComment} className="w-5 mr-2" />
                  <p className="align-middle ml-2">카카오톡으로 시작하기</p>
                </li>
              </button>
              <button className="rounded-xl px-7 py-3 mb-6 w-3/5 bg-emerald-400/70 hover:bg-emerald-400/90">
                <li className="flex flex-row items-center justify-center">
                  <FontAwesomeIcon icon={faN} className="w-5 mr-2" />
                  <p className="align-middle ml-2">네이버로 시작하기</p>
                </li>
              </button>
              <button className="rounded-xl px-7 py-3 mb-6 w-3/5 bg-gray-300/70 hover:bg-gray-300/90">
                <li className="flex flex-row items-center justify-center">
                  <FontAwesomeIcon icon={faGoogle} className="w-5 mr-2" />
                  <p className="align-middle ml-2">구글로 시작하기</p>
                </li>
              </button>
            </ul>
          </div>
          <div className="using-General mt-5 p-5">
            <ul>
              <button className="rounded-xl px-7 py-3 mb-1 w-3/5 bg-transparent hover:bg-gray-100">
                <li className="flex flex-row items-center justify-center">
                  <p className="align-middle ml-2">로그인하기</p>
                </li>
              </button>
              <button className="rounded-xl px-7 py-3 mb-1 w-3/5 bg-transparent hover:bg-gray-100">
                <li className="flex flex-row items-center justify-center">
                  <p className="align-middle ml-2">회원가입하기</p>
                </li>
              </button>
              <button className="rounded-xl px-7 py-3 mb-1 w-3/5 bg-transparent hover:bg-gray-100">
                <li className="flex flex-row items-center justify-center">
                  <p className="align-middle ml-2">아이디 / 비밀번호 찾기</p>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
