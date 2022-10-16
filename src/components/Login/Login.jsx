import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogInFormSubmit = ev => {
    ev.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
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
          <form
            onSubmit={handleLogInFormSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <div className="flex flex-wrap gap-6 justify-between mt-4">
                <button
                  className="label-text-alt link link-hover"
                  type="button">
                  Forgot password?
                </button>
                <span className="border hidden sm:inline-flex"></span>
                <Link to="/register" className="label-text-alt link link-hover">
                  Create a new account
                </Link>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
