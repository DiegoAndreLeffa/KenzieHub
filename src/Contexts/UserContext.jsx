import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { api } from "../Service/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const [carregando, setCarregando] = useState(true);

  async function userLogin(formData) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);

      const { token, user: userResponse } = response.data;
      setUser(userResponse);

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", userResponse.id);

      setToken(token);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setCarregando(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: { authorization: `Bearer ${token}` },
        });

        setUser(data);
      } catch (error) {
        console.error(error);
        localStorage.clear();
      } finally {
        setCarregando(false);
      }
    }

    loadUser();
  }, []);

  async function userRegister(formData) {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      toast.success("Conta cadastrada com sucesso");

      navigate("/");
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        navigate,
        userLogin,
        userRegister,
        user,
        carregando,
        token,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
