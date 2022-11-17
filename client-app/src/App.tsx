import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
      <Route
        path="/conversations"
        element={
          <RequiredAuthRoute>
            <Conversations />
          </RequiredAuthRoute>
        }
      >
        <Route path=":id" element={<ConversationChannel />} />
      </Route>
    </Routes>
  );
}

export const RequiredAuthRoute: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (!user && !isLoading) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default App;
