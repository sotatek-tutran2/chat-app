import { Routes, Route } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import Conversations from "./pages/conversations";
import ConversationChannel from "./pages/ConversationChannel";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/conversations" element={<Conversations />}>
        <Route path=":id" element={<ConversationChannel />} />
      </Route>
    </Routes>
  );
}

export default App;
