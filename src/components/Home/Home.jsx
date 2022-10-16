import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <section>
      <div className="container mx-auto">
        {user?.email && (
          <h1 className="text-4xl">
            Welcome, <span className="text-purple-500">{user?.email}</span>
          </h1>
        )}
      </div>
    </section>
  );
};

export default Home;
