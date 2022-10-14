import { Routes, Route, Outlet } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/conversations"
        element={
          <div>
            <div>Conversations</div>
            <Outlet />
          </div>
        }
      />
      <Route path=":id" element={<div>Conversation ID Page</div>} />
    </Routes>
  );
}

export default App;
