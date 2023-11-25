import { ReactNode } from 'react';
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from "./utils.module.css";
import socialMediaStyles from "./socialmedia.module.css";
import emailStyles from "./email.module.css";

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          <img
            src="/perfil.jpeg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt="Luis Filipe Alves de Oliveira"
          />
          <h1 className={utilStyles.heading2Xl}>Luis Filipe Alves de Oliveira</h1>
        </>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
        Senior iOS Software Engineer. Specialist and passionate about iOS development, with a solid foundation in app creation. Committed to delivering the best user experiences in mobile app development.
        </p>
      </section>

      <section className={socialMediaStyles.container}>
        <a href="https://gitlab.com/lfoliveira.dev" target="_blank">
          <Image
            src="/gitlab.png"
            alt="Gitlab Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>

        <a href="https://github.com/lfoliveir4" target="_blank">
          <Image
            src="/github.png"
            alt="Github Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>

        <a href="https://www.linkedin.com/in/lf-oliveira/" target="_blank">
          <Image
            src="/linkedin-icon.jpg"
            alt="Linkedin Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>

        <a href="https://twitter.com/lfoliveir4" target="_blank">
          <Image
            src="/twitter.png"
            alt="Twitter Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>
      </section>

      <section className={emailStyles.container}>
        <a href="mailto:lfoliveira.dev@gmail.com">lfoliveira.dev@gmail.com</a>
      </section>
    </Layout>
  )
}