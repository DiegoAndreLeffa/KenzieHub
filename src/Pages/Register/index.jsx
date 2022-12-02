import { Link } from "react-router-dom";
import { RegisterForm } from "../../Components/FormRegister";
import logo from "../../Imgs/LogoKenzieHub.svg";
import { StyledRegister } from "./style";

export function Register() {
  return (
    <StyledRegister>
      <div className="divLogo">
        <img src={logo} alt="Kenzie Hub" />

        <Link to="/">Voltar</Link>
      </div>
      <RegisterForm />
    </StyledRegister>
  );
}
