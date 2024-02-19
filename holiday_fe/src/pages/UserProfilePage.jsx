export default function UserProfilePage() {
  return (
    <section className="h-dvh mx-10 mt-10 divide-y-[1px]">
      <div className="user-info py-2">
        <h1 className="text-3xl font-extrabold">유저 이름</h1>
      </div>
      <div className="user-profile flex flex-row gap-4 py-2">
        <div className="user-profile-nav w-1/6">
          <ul>
            <li className="py-2">
              <button className="hover:bg-user-profile w-full py-2 rounded-xl">
                프로필 수정
              </button>
            </li>
            <li className="py-2">
              <button className="hover:bg-user-profile w-full py-2 rounded-xl">
                여행 스케줄 수정
              </button>
            </li>
            <li className="py-2">
              <button className="hover:bg-user-profile w-full py-2 rounded-xl">
                카테고리 수정
              </button>
            </li>
          </ul>
        </div>
        {/* 유저 프로필 수정 */}
        <div className="user-profile-form w-5/6 bg-user-profile rounded-3xl min-h-max mt-2">
          <form>
            <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-10">
              <div className="col-span-1 row-span-2">
                <div className="mt-2 flex flex-col items-center gap-x-3">
                  <svg
                    className="h-24 w-24 text-gray-300 mb-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <label>
                    <span className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      수정하기
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              <div className="col-start-2 col-span-5 flex gap-2">
                <div className="w-1/2 h-fit">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    이름
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-transparent max-w-xl">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                        placeholder="유저 이름"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="max-w-xl">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="이메일"
                        className="block w-full rounded-md bg-transparent border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-2 col-span-5 w-full">
                <label
                  htmlFor="user-info"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  info
                </label>
                <textarea
                  name="user-info"
                  id="user-info"
                  cols="30"
                  rows="10"
                  placeholder="info"
                  className="block w-full resize-none rounded-md bg-transparent border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-start-6 flex items-right justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-make-schedule-btn px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
