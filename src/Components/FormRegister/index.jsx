import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.min.css";
import { RegisterFormSchema } from "./registerSchema";
import { StyledFormRegister } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export function RegisterForm() {
  const { loading, userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });

  async function onSubmit(data) {
    delete data.passwordConfirmation;
    await userRegister(data);
    reset();
  }

  return (
    <StyledFormRegister>
      <h1>Crie sua conta</h1>
      <small>Rapido e grátis, vamos nessa</small>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite aqui o seu nome*"
          {...register("name")}
          disabled={loading}
        />
        {errors.name && <small>{errors.name.message}</small>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui o seu email*"
          {...register("email")}
          disabled={loading}
        />
        {errors.email && <small>{errors.email.message}</small>}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui o seu senha*"
          {...register("password")}
          disabled={loading}
        />
        {errors.password && <small>{errors.password.message}</small>}

        <label htmlFor="password">Confirmar Senha</label>
        <input
          type="password"
          id="passwordConfirmation"
          placeholder="Digite novamente sua senha*"
          {...register("passwordConfirmation")}
          disabled={loading}
        />
        {errors.passwordConfirmation && (
          <small>{errors.passwordConfirmation.message}</small>
        )}

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Fale sobre você*"
          {...register("bio")}
          disabled={loading}
        />
        {errors.bio && <small>{errors.bio.message}</small>}

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          placeholder="Digite aqui o seu Linkedin"
          {...register("contact")}
          disabled={loading}
        />
        {errors.contact && <small>{errors.contact.message}</small>}

        <label htmlFor="course_module">Selecionar módulo</label>
        <select
          name="course_module"
          id="course_module"
          {...register("course_module")}
          disabled={loading}
        >
          {/* <option value="">Modulos*</option> */}
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        {errors.course_module && <small>{errors.course_module.message}</small>}

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </StyledFormRegister>
  );
}
