import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext/UserContext";

const Login = () => {
  const loginFormRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { signIn, signInWithGoogle, verifyEmail, resetPassword } =
    useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch(err => console.error(err));
  };

  const handleResetPassword = email => {
    resetPassword(email)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  };

  const handleLogInFormSubmit = ev => {
    ev.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    if (!emailValue && !passwordValue) return;

    signIn(emailValue, passwordValue)
      .then(result => {
        const user = result?.user;
        loginFormRef.current.reset();
        verifyEmail()
          .then(data => {
            console.log("email verify:", data);
          })
          .catch(err => console.error(err));
        navigate(from, { replace: true });
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="">
            <form
              onSubmit={handleLogInFormSubmit}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
              ref={loginFormRef}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    ref={emailRef}
                    autoComplete="username"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    ref={passwordRef}
                    autoComplete="current-password"
                  />
                </div>
                <div className="flex flex-wrap gap-6 justify-center mt-4 text-center">
                  <button
                    className="label-text-alt link link-hover"
                    type="button"
                    onClick={() =>
                      emailRef.current.value &&
                      handleResetPassword(emailRef.current.value)
                    }>
                    Forgot password?
                  </button>
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover">
                    Create a new account
                  </Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                  <button
                    onClick={handleSignInWithGoogle}
                    type="button"
                    className="btn btn-secondary mt-4">
                    use google login
                  </button>
                </div>
              </div>
            </form>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
