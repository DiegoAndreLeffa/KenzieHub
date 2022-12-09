import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router-dom";
import logo from "../../Imgs/LogoKenzieHub.svg";

import { StyledDashBoard } from "./style";
import { ModalFormAdd } from "../../Components/ModalFormAdd";
import { ModalFromAtt } from "../../Components/ModalFromAtt";
import { TechContext } from "../../Contexts/TechContext";
import { useEffect } from "react";

import { CgTrash } from "react-icons/cg";

export function DashBoard() {
  const { navigate, user, carregando } = useContext(UserContext);

  const { removeTech, attLista } = useContext(TechContext);

  const [modalAdd, setModalAdd] = useState(null);
  const [modalAtt, setModalAtt] = useState(null);

  const [tech, setTech] = useState();

  useEffect(() => {
    attLista();
  }, [attLista]);

  if (carregando) {
    return null;
  }

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }

  function atualizandoTech(tech) {
    setModalAtt(true);
    setTech(tech);
  }

  function deleteTech(id) {
    removeTech(id);
  }

  return user ? (
    <StyledDashBoard>
      <nav>
        <div>
          <img src={logo} alt="Kenzie HUB" />

          <button className="sair" onClick={logout}>
            Sair
          </button>
        </div>
      </nav>
      <header className="user">
        <div>
          <h1>Olá, {user.name}</h1>

          <p>{user.course_module}</p>
        </div>
      </header>
      {modalAdd && <ModalFormAdd setModalAdd={setModalAdd} />}
      {modalAtt ? <ModalFromAtt tech={tech} setModalAtt={setModalAtt} /> : null}
      <div className="divManu">
        <div className="divTech">
          <h2>Tecnologias</h2>
          <button
            className="addTech"
            type="button"
            onClick={() => setModalAdd(true)}
          >
            +
          </button>
        </div>
        <div className="listaTech">
          <ul className="ulTech">
            {user.techs.map((tech) => {
              return (
                <li key={tech.id}>
                  <div onClick={() => atualizandoTech(tech)}>
                    <h3>{tech.title}</h3>
                    <p>{tech.status}</p>
                  </div>
                  <CgTrash
                    className="lixeira"
                    onClick={() => deleteTech(tech.id)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledDashBoard>
  ) : (
    <Navigate to="/" />
  );
}
