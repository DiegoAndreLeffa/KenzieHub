import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTechSchema } from "./addTechSchema";
import { TechContext } from "../../Contexts/TechContext";
import { useContext } from "react";
import { StyledFormAdd } from "./styled";

export function ModalFormAdd({ setModalAdd }) {
  const { adicinandoTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTechSchema),
  });

  async function onSubmit(data) {
    await adicinandoTech(data);
    setModalAdd(null);
  }

  return (
    <StyledFormAdd>
      <div className="modalBoxAdd">
        <div className="modalBoxTitle">
          <h2>Cadastrar Tecnologia</h2>

          <button className="closeModal" onClick={() => setModalAdd(null)}>
            X
          </button>
        </div>
        <div className="modalBoxBody">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Tecnologia"
              {...register("title")}
            />
            {errors.title && <small>{errors.title.message}</small>}

            <label htmlFor="status">Selecionar status</label>
            <select name="status" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && <small>{errors.status.message}</small>}

            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </div>
      </div>
    </StyledFormAdd>
  );
}
