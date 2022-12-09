import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../Contexts/TechContext";
import { attTechSchema } from "./attTechSchema";
import { StyledFormAtt } from "./style";

export function ModalFromAtt({ tech, setModalAtt }) {
  const { atualizandoTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(attTechSchema),
  });

  function onSubmit(data) {
    atualizandoTech(tech.id, data);
    setModalAtt(null);
  }

  return (
    <StyledFormAtt>
      <div className="modalBox">
        <div className="modalBoxTitle">
          <h2>Atualizar Tecnologia</h2>
          <button className="closeModal" onClick={() => setModalAtt(null)}>
            X
          </button>
        </div>
        <div className="modalBoxBody">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label>Nome</label>
            <h2>{tech.title}</h2>

            <label htmlFor="status">Status</label>
            <select name="status" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && <small>{errors.status.message}</small>}

            <button type="submit">Atualizar Tecnologia</button>
          </form>
        </div>
      </div>
    </StyledFormAtt>
  );
}
