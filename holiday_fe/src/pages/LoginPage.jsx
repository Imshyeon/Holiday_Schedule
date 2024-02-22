import { faComment, faN } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SNSButton from "../Components/UI/Login-Signup-Find/SNSButton";
import GeneralButton from "../Components/UI/Login-Signup-Find/GeneralButton";

export default function LoginPage() {
  return (
    <section className="text-center align-middle h-fit p-16 max-xl:p-20 max-xl:h-dvl">
      <article className="p-4">
        <h1 className="text-3xl font-extrabold">로그인하기</h1>
      </article>
      <article className="grid grid-cols-4 mt-4">
        <div className="col-start-2 col-span-2 justify-items-center bg-gray-50 rounded-xl p-5">
          <div className="using-SNS mt-8 p-5 border-b-2 border-b-gray">
            <ul>
              <SNSButton
                icon={faComment}
                title="카카오로 시작하기"
                color="yellow"
              />
              <SNSButton icon={faN} title="네이버로 시작하기" color="emerald" />
              <SNSButton icon={faGoogle} title="구글로 시작하기" color="gray" />
            </ul>
          </div>
          <div className="using-General mt-5 p-5">
            <ul>
              <GeneralButton title="로그인하기" />
              <GeneralButton title="회원가입하기" />
              <GeneralButton title="아이디 / 비밀번호 찾기" />
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
