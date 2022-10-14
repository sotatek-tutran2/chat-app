import styles from "./index.module.scss";
import {
  Button,
  InputContainer,
  InputError,
  InputField,
  InputLabel,
} from "../../styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <InputField
          id="email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "E-mail is required",
            },
          })}
        />
        {typeof errors?.email?.message === "string" && (
          <InputError>{errors?.email.message}</InputError>
        )}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          id="password"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />
        {typeof errors?.password?.message === "string" && (
          <InputError>{errors?.password.message}</InputError>
        )}
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
