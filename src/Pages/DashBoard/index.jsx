import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Imgs/LogoKenzieHub.svg";
import { api } from "../../Service/api";
import { StyledDashBoard } from "./style";

export function DashBoard() {
  const navigate = useNavigate();

  const [user, setuser] = useState([]);

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    async function getUserData() {
      const tokenLocal = window.localStorage.getItem("@TOKEN");

      const headers = {
        headers: {
          Authorization: "Bearer " + tokenLocal,
        },
      };
      try {
        const response = await api.get(`/profile`, headers);
        setuser(response.data);
        return response;
      } catch (error) {}
    }
    getUserData();
  }, []);

  return (
    <StyledDashBoard>
      <nav>
        <div>
          <img src={logo} alt="Kenzie HUB" />

          <button onClick={logout}>Sair</button>
        </div>
      </nav>
      <header className="user">
        <div>
          <h1>Olá, {user.name}</h1>

          <p>{user.course_module}</p>
        </div>
      </header>
      <div className="divManu">
        <div>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </div>
    </StyledDashBoard>
  );
}
