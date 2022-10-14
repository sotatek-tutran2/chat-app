import styles from "./index.module.scss";
import { Button, InputContainer, InputField, InputLabel } from "../../styles";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <InputContainer>
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <InputField id="email" type="email" />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password" />
      </InputContainer>
      <Button type="submit">Sign In</Button>
      <div className={styles.formText}>
        <span>Don't have an account? </span>
        <Link to={"/register"}>Register</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
