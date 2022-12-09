import * as yup from "yup";

export const addTechSchema = yup.object().shape({
  title: yup.string().required("Nome da tecnologia obrigatróio!"),
  status: yup.string().required("Status da tecnologia obrigatório!"),
});
