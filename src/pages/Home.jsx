import { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {
  const [fade, setFade] = useState(false);
  useEffect(() => setFade(true), []);

  return (
    <section className={`home-page ${fade ? "fade-in" : ""}`}>
      <h1>
        Hi, I'm <span>Faiza Yunusa</span>
      </h1>
      <p>
        Crafting elegant, modern, and premium websites using React.
      </p>
      <button>View My Work</button>
    </section>
  );
}

export default Home;
 