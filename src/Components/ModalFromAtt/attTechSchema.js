import * as yup from "yup";

export const attTechSchema = yup.object().shape({
  status: yup.string().required("Status da tecnologia obrigatório!"),
});
