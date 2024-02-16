export default function FindAccountPage() {
  return (
    <section className="text-center h-fit max-xl:h-screen">
      <article className="p-4 mt-8">
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
              <button className="rounded-xl px-7 py-3 mb-6 w-3/5 bg-gray-300/70 hover:bg-gray-300/90">
                <li className="flex flex-row items-center justify-center">
                  <p className="align-middle ml-2">다음</p>
                </li>
              </button>
            </form>
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
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
