import Head from 'next/head';
import styles from './Home.module.css';
import GameCard from "/components/GameCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Citrubrain | Learn Game Mechanics Through Play</title>
        <meta name="description" content="Citrubrain helps elementary and high school students learn game mechanics by playing fun, educational mini-games." />
        <meta name="keywords" content="Citrubrain, game learning, educational games, kids logic games, high school games, learning through play" />
        <meta name="author" content="Citrubrain Team" />
        <meta property="og:title" content="Citrubrain" />
        <meta property="og:description" content="Play mini-games and learn the mechanics behind them!" />
        <meta property="og:image" content="/images/citrubrain-cover.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <main className={styles.container}>
      <section className={styles.gamesSection}>
        <div className={styles.gameList}>
          <GameCard
            imageSrc="/gameImage/miniMaterMind.png"
            alt="Mastermind Game"
            name="Mastermind Game"
            href="https://victorkwong.github.io/MasterMind/"
          />
          
        </div>
      </section>
    </main>
    </>
  );
}
