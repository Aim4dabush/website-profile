//styles
import styles from "./Input.module.scss";

const Input = ({
  children,
  classStyle,
  error,
  errorMessage,
  handleOnBlur,
  handleOnChange,
  id,
  name,
  type,
  value,
}) => {
  return (
    <div className={styles.inputControl}>
      <label htmlFor={id}>{children}</label>
      <input
        className={classStyle}
        id={id}
        name={name}
        type={type}
        value={value}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
      />
      {error && <p className={styles.errorStyle}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
