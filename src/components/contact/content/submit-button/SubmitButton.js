//styles
import styles from "./SubmitButton.module.scss";

const SubmitButton = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.btn} type="submit">
        Send
      </button>
    </div>
  );
};

export default SubmitButton;
