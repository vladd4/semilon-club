import styles from "./ContactForm.module.scss";
import FormImg from "../../assets/form_img.avif";
import Line from "../../assets/Яйця 3.png";
import Line2 from "../../assets/яйца1.png";
import useAnimate from "../../hooks/useAnimate";
import { sendFormToTelegram } from "../../utils/postTelegram";

const sendInfo = (e) => {
  const name = document.querySelector("#nameInput");
  const post = document.querySelector("#postInput");
  const text = document.querySelector("#textInput");
  e.preventDefault();
  if (name.value.trim() === "" || post.value.trim() === "") {
    alert("Заповніть, будь-ласка, всі поля!");
    return;
  }
  const string = `Проект: Semillon Club \nІм'я: ${name.value} \nНомер телефону: +380${post.value} \nПовідомлення: ${text.value}`;
  sendFormToTelegram(string);
  name.value = "";
  post.value = "";
  text.value = "";
};

const ContactForm = () => {
  const formatPhoneNumber = (event) => {
    const input = event.target;
    const inputValue = input.value;
    const digitsOnly = inputValue.replace(/\D/g, "").slice(0, 9);
    input.value = digitsOnly;
  };

  const { ref, isAnimated } = useAnimate();
  return (
    <section className={styles.root} id="contactForm">
      <article
        ref={ref}
        className={`${styles.form} animated-element ${
          isAnimated ? "animate" : ""
        }`}
      >
        <h1>Форма зв'язку</h1>
        <p>Залиште повідомлення, і ми зв'яжемося з вами.</p>
        <input type="text" placeholder="Ім'я*" id="nameInput" required />
        <input
          type="email"
          placeholder="+380 (__) ___-__-__*"
          id="postInput"
          required
          onInput={formatPhoneNumber}
        />
        <textarea
          type="text"
          placeholder="Повідомлення"
          id="textInput"
          className={styles.text}
        ></textarea>
        <button onClick={(e) => sendInfo(e)}>Відправити</button>
      </article>
      <img
        ref={ref}
        className={`${styles.formImage} animated-element ${
          isAnimated ? "animate" : ""
        }`}
        alt="Контакта форма"
        src={FormImg}
      />
      <img className={styles.line} alt="Dekor line" src={Line}></img>
      <img className={styles.line2} alt="Dekor line" src={Line2}></img>
    </section>
  );
};
export default ContactForm;
