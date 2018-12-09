import React from "react";
import './index.css';
import { LoginForm, SignupForm } from 'components/AuthForms';

const Auth = (props, context) => (
  <main className="Auth">
    <div className="Column">
      <img className="Column-child"
      src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className="Column">
        <div className="White-box-child-formBox">
            <img className="White-box-child-formBox-img"
                src={require("images/logo.png")} alt="Logo" />
            {props.action === 'login' && <LoginForm />}
            {props.action === 'signup' && <SignupForm />}
        </div>
      <div className="White-box-child">
      {props.action === 'login' && (
          <p className="White-box-p">
          계정이 없으신가요?{" "}
          <span
            onClick={props.changeAction}
            className="White-box-change-link"
          >
            가입하기
          </span>
        </p>)}

    {props.action  === 'signup' && (
        <p className="White-box-p">
        계정이 있으신가요?{" "}
        <span
          className="White-box-change-link"
          onClick={props.changeAction}
        >
          로그인
        </span>
      </p>)}
      </div>
      <div className="App-box">
        <span>Get the app</span>
        <div className="App-box-appstores">
          <img className="App-box-appstores-img"
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img className="App-box-appstores-img"
            src={require("images/android.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);
export default Auth;