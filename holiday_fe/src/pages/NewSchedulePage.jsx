export default function NewSchedulePage() {
  return (
    <section className="mx-10 p-16 max-xl:p-20">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="mt-2 col-span-5">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-name"
                    id="schedule-name"
                    autoComplete="schedule-name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder="스케줄명"
                  />
                </div>
              </div>
              <div className="mt-2 col-span-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-category"
                    id="schedule-category"
                    autoComplete="schedule-category"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder="카테고리"
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-place"
                    id="schedule-place"
                    autoComplete="schedule-place"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder="여행 장소"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="date"
                    name="schedule-date-start"
                    id="schedule-date-start"
                    autoComplete="schedule-date-start"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder="일정 시작일"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="date"
                    name="schedule-date-end"
                    id="schedule-date-end"
                    autoComplete="schedule-date-end"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder="일정 종료일"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 세부일정 -> 이전 모달에서 받아온 일정대로 출력. */}
          <div className="border-b border-gray-900/10 pb-12">
            <div className="col-span-full">
              <label
                htmlFor="day1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                1일차
              </label>
              <div className="mt-2">
                <textarea
                  id="day1"
                  name="day1"
                  rows="10"
                  className="block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          {/* ==== */}
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-make-schedule-btn px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
