import { useRef } from "react";
import emailjs from "@emailjs/browser";

//components
import Input from "./input/Input";
import SubmitButton from "./submit-button/SubmitButton";
import TextArea from "./text-area/TextArea";

//hooks
import { useValidation } from "../../../hooks/useValidation";

//styles
import styles from "./ContactContent.module.scss";

const ContactContent = () => {
  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const form = useRef();
  const {
    value: comment,
    isValid: commentValid,
    error: commentError,
    handleOnBlur: commentOnBlur,
    handleOnChange: commentOnChange,
    reset: commentReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: company,
    isValid: companyValid,
    error: companyError,
    handleOnBlur: companyOnBlur,
    handleOnChange: companyOnChange,
    reset: companyReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailValid,
    error: emailError,
    handleOnBlur: emailOnBlur,
    handleOnChange: emailOnChange,
    reset: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    value: name,
    isValid: nameValid,
    error: nameError,
    handleOnBlur: nameOnBlur,
    handleOnChange: nameOnChange,
    reset: nameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: number,
    isValid: numberValid,
    error: numberError,
    handleOnBlur: numberOnBlur,
    handleOnChange: numberOnChange,
    reset: numberReset,
  } = useValidation((value) => value.trim() !== "");

  let formIsValid = false;

  if (commentValid && companyValid && emailValid && nameValid && numberValid) {
    formIsValid = true;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
        (results) => {
          console.log(results.text);
          alert("message sent!");
        },
        (error) => {
          alert(error.text);
        }
      );

      commentReset();
      companyReset();
      emailReset();
      nameReset();
      numberReset();
    }
  };

  const commentClassName = commentError ? styles.error : null;
  const companyClassName = companyError ? styles.error : null;
  const emailClassName = emailError ? styles.error : null;
  const nameClassName = nameError ? styles.error : null;
  const numberClassName = numberError ? styles.error : null;

  return (
    <form className={styles.formContainer} ref={form} onSubmit={handleOnSubmit}>
      <div className={styles.inputWrapper}>
        <Input
          classStyle={nameClassName}
          error={nameError}
          errorMessage={"Please enter a name"}
          handleOnBlur={nameOnBlur}
          handleOnChange={nameOnChange}
          id={"name"}
          name={"name"}
          type={"text"}
          value={name}
        >
          Name
        </Input>
        <Input
          classStyle={companyClassName}
          error={companyError}
          errorMessage={"Please enter a name"}
          handleOnBlur={companyOnBlur}
          handleOnChange={companyOnChange}
          id={"company"}
          name={"company"}
          type={"text"}
          value={company}
        >
          Company
        </Input>
      </div>
      <div className={styles.inputWrapper}>
        <Input
          classStyle={numberClassName}
          error={numberError}
          errorMessage={"Please enter a name"}
          handleOnBlur={numberOnBlur}
          handleOnChange={numberOnChange}
          id={"number"}
          name={"number"}
          type={"tel"}
          value={number}
        >
          Phone Number
        </Input>
        <Input
          classStyle={emailClassName}
          error={emailError}
          errorMessage={"Please enter a name"}
          handleOnBlur={emailOnBlur}
          handleOnChange={emailOnChange}
          id={"email"}
          name={"email"}
          type={"email"}
          value={email}
        >
          Email
        </Input>
      </div>
      <TextArea
        classStyle={commentClassName}
        error={commentError}
        errorMessage={"Please enter a name"}
        handleOnBlur={commentOnBlur}
        handleOnChange={commentOnChange}
        id={"comment"}
        name={"comments"}
        value={comment}
      />
      <SubmitButton />
    </form>
  );
};

export default ContactContent;
