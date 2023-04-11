//components
import ContactContent from "../../components/contact/content/ContactContent";
import ContactHero from "../../components/contact/hero/ContactHero";
import ContactTitle from "../../components/contact/hero-title/ContactTitle";

//styles
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <ContactHero />
      <ContactTitle />
      <ContactContent />
    </div>
  );
};

export default Contact;
