import React from "react";
import Ionicon from "react-ionicons";
import  "./index.css";
 export const LoginForm = props => (
  <div>
    <form>
      <input type="text" placeholder="사용자 이름" />
      <input type="password" placeholder="비밀번호" />
      <input type="submit" value="로그인" />
    </form>
    <span> 또는 </span>
    <span>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> 페이스북으로 로그인
    </span>
    <span>비밀번호를 잊으셨나요?</span>
  </div>
);
 export const SignupForm = props => (
  <div>
    {/* <h3>Sign up to see photos and videos from your friends.</h3> */}
    <button>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />페이스북으로 로그인
    </button>
    <span> 또는 </span>
    <form>
      <input type="email" placeholder="이메일" />
      <input type="text" placeholder="성명" />
      <input type="username" placeholder="사용자 이름" />
      <input type="password" placeholder="비밀번호" />
      <input type="submit" value="가입" />
    </form>
    <p>
      가입하면 sostagram의 <span>약관 & 데이터 및 쿠키 정책</span>에 동의하게 됩니다..
    </p>
  </div>
);