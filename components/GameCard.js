// components/GameCard.js
import Image from "next/image";
import styles from "./GameCard.module.css";
import { useRouter } from "next/router";

export default function GameCard({ imageSrc, alt, name, href }) {
  const router = useRouter();

  const handleImageClick = () => {
    if (href) {
      window.open(href, "_blank"); // open in a new tab
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <button onClick={handleImageClick} className={styles.imageButton}>
          <Image src={imageSrc} alt={alt} width={120} height={120} />
          <div className={styles.gameName}>{name}</div>
        </button>
      </div>
    </div>
  );
}