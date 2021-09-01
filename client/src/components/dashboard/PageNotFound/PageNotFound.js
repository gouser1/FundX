import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found :(</h1>
      <h3>
        Try these links: <Link to="/">Home</Link>{" "}
        <Link to="/dashboard/pitches">Dashboard</Link>
      </h3>
    </div>
  );
};

export default PageNotFound;
