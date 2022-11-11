import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <br />
      <Link to={"/register"}>Register</Link>
      <br />
      <Link to={"/conversations"}>Conversations</Link>
      <br />
      <Link to={"/conversations/1"}>Conversation detail</Link>
    </div>
  );
};

export default HomePage;
