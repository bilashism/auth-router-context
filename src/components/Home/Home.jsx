import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext/UserContext";

const Home = () => {
  const { user, createUser } = useContext(AuthContext);
  const { email } = user;

  return (
    <section>
      <div className="container mx-auto">
        {email && (
          <h1 className="text-4xl">
            Welcome, <span className="text-purple-500">{email}</span>
          </h1>
        )}
      </div>
    </section>
  );
};

export default Home;
