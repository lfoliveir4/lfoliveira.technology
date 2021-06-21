import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Luis Filipe Alves de Oliveira";
export const siteTitle = "Luis";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      </header>
      <main>{children}</main>
    </div>
  );
}
