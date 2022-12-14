import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext/UserContext";

const Navbar = () => {
  const profileImgRef = useRef();
  const [menuState, setMenuState] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("resize", () => setMenuState(false));
  }, []);

  const handleToggleMainMenu = () =>
    setMenuState(prevStatus => (prevStatus = !prevStatus));

  const handleSignOut = () => {
    userSignOut()
      .then(result => {
        console.log(result);
      })
      .catch(err => console.error(err));
  };

  return (
    <nav className="bg-neutral text-neutral-content">
      <div className="navbar gap-5 container mx-auto">
        <div className="flex-1 ">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-purple-500">
            ARC
          </Link>
        </div>
        <div className="flex-1 flex-grow-[12] flex flex-col gap-4 relative isolate z-10 lg:flex-row lg:justify-center capitalize">
          <button
            onClick={handleToggleMainMenu}
            type="button"
            className="lg:hidden">
            menu
          </button>
          <div
            className={`${
              menuState
                ? "flex flex-col absolute top-full bg-neutral p-5"
                : "hidden"
            } lg:flex gap-4`}>
            <Link to="/home">home</Link>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
            <Link to="/settings">settings</Link>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : `https://dummyimage.com/80x80.png?text=80x80`
                  }
                  width="80"
                  height="80"
                  loading="lazy"
                  fetchpriority="low"
                  decoding="async"
                  ref={profileImgRef}
                  onError={() =>
                    (profileImgRef.current.src = `https://dummyimage.com/80x80/ff0000/ffffff.png?text=404`)
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleSignOut} type="button">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
