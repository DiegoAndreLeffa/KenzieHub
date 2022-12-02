import { LoginForm } from "../../Components/FormLogin";
import logo from "../../Imgs/LogoKenzieHub.svg";
import { StyledLogin } from "./style";
export function Login() {
  return (
    <StyledLogin>
      <div className="divLogo">
        <img src={logo} alt="Kenzie Hub" />
      </div>
      <LoginForm />
    </StyledLogin>
  );
}
