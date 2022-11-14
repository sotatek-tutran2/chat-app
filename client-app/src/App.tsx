import { Routes, Route } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import Conversations from "./pages/conversations";
import ConversationChannel from "./pages/ConversationChannel";
import HomePage from "./pages/home";
import useAuth from "./hooks/useAuth";
import { FC, ReactElement } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/conversations" element={<Conversations />}>
        <Route path=":id" element={<ConversationChannel />} />
      </Route>
    </Routes>
  );
}

const RequiredAuth: FC<{ children: ReactElement }> = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return children;
  }

  return "Please login";
};

export default App;
