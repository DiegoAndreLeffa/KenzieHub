import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom/dist";
import { loginFormSchema } from "./loginSchema";
import { StyledFormLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export function LoginForm() {
  const { loading, userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

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
