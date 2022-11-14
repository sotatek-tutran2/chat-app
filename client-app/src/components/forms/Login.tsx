import styles from "./index.module.scss";
import {
  Button,
  InputContainer,
  InputError,
  InputField,
  InputLabel,
} from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ILoginFormData } from "../../interfaces";
import { loginUserRequest } from "../../utils";
import { useState } from "react";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormData>();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values: ILoginFormData) => {
    setIsProcessing(true);
    loginUserRequest(values)
      .then(({ data }) => {
        console.log(data);
        setIsProcessing(false);
        navigate("/conversations");
      })
      .catch((err) => {
        console.log(err);
        setIsProcessing(false);
      });
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
      <Button type="submit" disabled={isProcessing}>
        Sign In
      </Button>
      <div className={styles.formText}>
        <span>Don't have an account? </span>
        <Link to={"/register"}>Register</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
