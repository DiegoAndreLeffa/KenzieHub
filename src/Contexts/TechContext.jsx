import { useContext } from "react";
import { createContext } from "react";
import { api } from "../Service/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { setUser } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");

  async function adicinandoTech(formData) {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success("Tech adicionada com sucesso");
      return response;
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  async function atualizandoTech(techId, dataForm) {
    try {
      const response = await api.put("/users/techs/" + techId, dataForm, {
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success("Tech atualizada com sucesso");
      return response;
    } catch (error) {
      console.error(error);
      toast.error("Sua tech não foi atualizada");
    }
  }

  async function removeTech(techId) {
    try {
      const response = await api.delete("/users/techs/" + techId, {
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success("Tech deletada com sucesso");
      return response;
    } catch (error) {
      console.error(error);
      toast.error("Sua tech não foi deletada");
    }
  }

  async function attLista() {
    try {
      const response = await api.get("/profile", {
        headers: { authorization: `Bearer ${token}` },
      });

      setUser(response.data);
    } catch (error) {}
  }

  return (
    <TechContext.Provider
      value={{ adicinandoTech, atualizandoTech, removeTech, attLista }}
    >
      {children}
    </TechContext.Provider>
  );
}
