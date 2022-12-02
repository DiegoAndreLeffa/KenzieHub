import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import { api } from "../../Service/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { loginFormSchema } from "./loginSchema";
import { StyledFormLogin } from "./style";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  async function userLogin(formData) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(data) {
    userLogin(data);
    reset();
  }

  return (
    <StyledFormLogin>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          disabled={loading}
        />
        {errors.email && <small>{errors.email.message}</small>}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
          disabled={loading}
        />
        {errors.password && <small>{errors.password.message}</small>}

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
      <small>Ainda não possui conta?</small>
      <Link to="/register">Cadastre-se</Link>
    </StyledFormLogin>
  );
}
