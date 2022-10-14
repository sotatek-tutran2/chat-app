import styles from "./index.module.scss";
import { Button, InputContainer, InputField, InputLabel } from "../../styles";
import { Link } from "react-router-dom";
import React from "react";

const RegisterForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <InputField id="email" type="email" />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField id="firstName" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField id="lastName" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password" />
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
