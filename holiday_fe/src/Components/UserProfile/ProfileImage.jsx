import profile from "../../svg/profile.svg";

export default function ProfileImage({ edit, changeUserProfileImage, image }) {
  return (
    <div className="lg:col-span-1 lg:row-span-2 max-lg:row-span-1 mr-7 max-lg:mr-0">
      <div className="mt-2 flex flex-col items-center gap-x-3">
        {!image && profile}
        {image && (
          <img
            src={image}
            alt="user-img"
            className="h-24 w-24 rounded-full mb-2 object-cover"
          />
        )}
        <label>
          <span
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            disabled={edit ? false : true}
          >
            수정하기
          </span>
          <input
            id="user-image"
            name="user-image"
            type="file"
            className="sr-only disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            accept="image/*"
            onChange={changeUserProfileImage}
            disabled={edit ? false : true}
          />
        </label>
      </div>
    </div>
  );
}
