import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "../Components/UserProfile/ProfileButton";
import ProfileInput from "../Components/UserProfile/ProfileInput";
import { userActions } from "../Store/user";
import ProfileImage from "../Components/UserProfile/ProfileImage";
import profile from "../svg/profile.svg";
import { motion } from "framer-motion";

export default function UserProfilePage() {
  const { edit, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let classBtn = "bg-main-footer-darker";
  if (edit) {
    classBtn = "bg-make-schedule-btn";
  }

  function clickUserButtonHandler(event) {
    event.preventDefault();

    dispatch(userActions.setEdit());
  }

  function userSubmitHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    dispatch(userActions.userProfileInformation(data));
    dispatch(userActions.setEdit());
  }

  function changeUserProfileImage(event) {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    dispatch(userActions.userProfileImage(fileURL));
  }

  console.log(user);

  return (
    <section className="h-dvh p-16 max-xl:p-20 divide-y-[1px]">
      <div className="user-info py-2">
        <h1 className="text-3xl font-extrabold">{user.username || "이름"}</h1>
      </div>
      <div className="user-profile flex flex-row gap-4 py-2">
        <div className="user-profile-nav w-1/6">
          <ul>
            <ProfileButton title="프로필 수정" />
            <ProfileButton title="여행 스케줄 수정" />
            <ProfileButton title="카테고리 수정" />
          </ul>
        </div>
        {/* 유저 프로필 수정 */}
        <div className="user-profile-form w-5/6 bg-user-profile rounded-3xl min-h-max mt-2">
          <div className="mt-0 grid lg:grid-cols-6 p-8 max-lg:grid-row-4 max-lg:grid-flow-col">
            <ProfileImage
              edit={edit}
              changeUserProfileImage={changeUserProfileImage}
              image={user.image || profile}
            />
            <form
              onSubmit={userSubmitHandler}
              className="col-start-2 col-span-5 flex flex-col gap-2 row-span-2"
            >
              <div className="flex flex-row gap-2">
                <div className="w-1/2 h-fit">
                  <ProfileInput
                    label="이름"
                    id="username"
                    value={user.username}
                    edit={edit}
                  />
                </div>
                <div className="w-1/2">
                  <ProfileInput
                    label="Email"
                    id="email"
                    type="email"
                    value={user.email}
                    edit={edit}
                  />
                </div>
              </div>
              <div className="col-start-2 col-span-5 w-full">
                <ProfileInput
                  label="Infomation"
                  id="userInfo"
                  value={user.userInfo}
                  edit={edit}
                />
              </div>
              <div className="col-start-6 flex items-right justify-end gap-x-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type={edit ? "submit" : "button"}
                  onClick={edit ? null : clickUserButtonHandler}
                  className={`rounded-md ${classBtn} px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                >
                  {edit ? "Save" : "Edit"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
