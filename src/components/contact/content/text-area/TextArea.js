//styles
import styles from "./TextArea.module.scss";

const TextArea = ({
  classStyle,
  error,
  errorMessage,
  handleOnBlur,
  handleOnChange,
  id,
  name,
  value,
}) => {
  return (
    <div className={styles.textAreaControl}>
      <label htmlFor={id}>Comment</label>
      <textarea
        className={classStyle}
        name={name}
        id={id}
        cols="30"
        rows="10"
        value={value}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
      />
      {error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default TextArea;
