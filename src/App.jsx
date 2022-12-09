import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { DashBoard } from "./Pages/DashBoard";
import { ToastContainer } from "react-toastify";
import { StyledBody } from "./StyledApp";
import { UserProvider } from "./Contexts/UserContext";
import { TechProvider } from "./Contexts/TechContext";

function App() {
  return (
    <StyledBody>
      <UserProvider>
        <TechProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </TechProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </UserProvider>
    </StyledBody>
  );
}

export default App;
