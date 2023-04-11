//styles
import styles from "./AboutMessage.module.scss";

const AboutMessage = () => {
  return (
    <p className={styles.message}>
      <span className={styles.aloha}></span>! My name is Edward Arasato. I have
      been a developer for about 2 years now. I have worked with a variety of
      stacks and frameworks, as I have listed at the bottom. I am always willing
      to learn something new because I not only feel that I’m adding more tools
      to my tool belt but also, I fulfill my curiosity. I sometimes will spend
      time studying something and not realize 5 hours have passed by. I feel
      like not only do I bring hard work to a team but something more valuable
      which is positivity and a joy to be around.
    </p>
  );
};

export default AboutMessage;
