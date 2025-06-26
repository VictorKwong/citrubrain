import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';

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
        <header className={styles.header}>
          <h1>🎮 Welcome to Citrubrain!</h1>
          <p className={styles.tagline}>Learn how games work—by playing them!</p>
        </header>

        <section className={styles.gamesSection}>
          <h2>🚀 Start Exploring</h2>
          <div className={styles.gameList}>
            <div className={styles.gameCard}>
              <Image
                src="/images/mastermind.png"
                alt="Mastermind Game"
                width={120}
                height={120}
              />
              <h3>Mastermind</h3>
              <p>Crack the code and learn logic!</p>
              <button className={styles.playButton}>Coming Soon</button>
            </div>

            <div className={styles.gameCard}>
              <Image
                src="/images/memory.png"
                alt="Memory Game"
                width={120}
                height={120}
              />
              <h3>Memory Match</h3>
              <p>Test your memory skills!</p>
              <button className={styles.playButton}>Coming Soon</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
