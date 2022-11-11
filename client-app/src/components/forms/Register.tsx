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
import { registerUserRequest } from "../../utils";
import { IRegisterFormData } from "../../interfaces";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterFormData>();

  const onSubmit = (values: IRegisterFormData) => {
    registerUserRequest(values)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
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
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField
            id="firstName"
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is required",
              },
            })}
          />
          {typeof errors?.firstName?.message === "string" && (
            <InputError>{errors?.firstName.message}</InputError>
          )}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField
            id="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is required",
              },
            })}
          />
          {typeof errors?.lastName?.message === "string" && (
            <InputError>{errors?.lastName.message}</InputError>
          )}
        </InputContainer>
      </section>
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
      <Button type="submit">Create My Account</Button>
      <div className={styles.formText}>
        <span>Already have an account? </span>
        <Link to={"/login"}>Login</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
