import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>ErrorPage</h2>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default ErrorPage;
