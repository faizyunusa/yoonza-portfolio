import { useEffect, useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [fade, setFade] = useState(false);
  useEffect(() => setFade(true), []);

  return (
    <section className={`contact-page ${fade ? "fade-in" : ""}`}>
      <h2>Contact Me</h2>
      <p>Email: faizyunusa.tech@gmail.com</p>
      <p>GitHub: https://github.com/faizyunusa</p>
      <p>LinkedIn: https://www.linkedin.com/in/faiza-yunusa-51497627a/</p>
    </section>
  );
}

export default Contact;
