import { useState } from "react";
import { useForm } from "react-hook-form";
import { ICreateConversationFormData } from "../../interfaces";
import {
  Button,
  InputContainer,
  InputError,
  InputField,
  InputLabel,
  InputAreaField,
} from "../../styles";

const CreateConversationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICreateConversationFormData>();
  const [isProcessing, setIsProcessing] = useState(false);
  // const navigate = useNavigate();

  const onSubmit = (values: ICreateConversationFormData) => {
    setIsProcessing(true);
    console.log(values);
    // loginUserRequest(values)
    //   .then(({ data }) => {
    //     console.log(data);
    //     setIsProcessing(false);
    //     navigate("/conversations");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setIsProcessing(false);
    //   });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="recipient">Recipient</InputLabel>
        <InputField
          id="recipient"
          {...register("recipient", {
            required: {
              value: true,
              message: "Recipient is required",
            },
          })}
        />
        {typeof errors?.recipient?.message === "string" && (
          <InputError>{errors?.recipient.message}</InputError>
        )}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="message">Message (optional)</InputLabel>
        <InputAreaField id="message" {...register("message")} />
      </InputContainer>
      <Button type="submit" disabled={isProcessing}>
        Create
      </Button>
    </form>
  );
};

export default CreateConversationForm;
