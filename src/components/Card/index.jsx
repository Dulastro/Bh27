import posterImg from "../../assets/bh.jpg";
import styles from "./styles.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="StarWAr" />
      <div>
        <h2>Pôster do Bh27</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quibusdam eligendi repellat, voluptate culpa dolorum minima officia,
          quia, cumque impedit ea! Possimus soluta vitae maxime vel voluptatum
          iusto sequi corrupti?
        </p>

        <button>Comprar agora</button>
      </div>
    </div>
  );
}
