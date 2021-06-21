import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import socialMediaStyles from "../styles/socialmedia.module.css";
import emailStyles from "../styles/email.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Mobile Software Engineer. Solving problems with javascript since 2017.
          Focused and passionate about React, React Native, Node with a few hints of
          Swift.
        </p>
      </section>

      <section className={socialMediaStyles.container}>
        <a href="https://gitlab.com/lfoliveira.dev" target="_blank">
          <Image
            src="/images/gitlab.png"
            alt="Gitlab Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>

        <a href="https://github.com/lfoliveir4" target="_blank">
          <Image
            src="/images/github.svg"
            alt="Github Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>

        <a href="https://www.linkedin.com/in/lf-oliveira/" target="_blank">
          <Image
            src="/images/linkedin-icon.jpg"
            alt="Linkedin Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>

        <a href="https://twitter.com/lfoliveir4" target="_blank">
          <Image
            src="/images/twitter.png"
            alt="Twitter Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>

        <a href="https://medium.com/@lfoliveira.dev" target="_blank">
          <Image
            src="/images/medium.png"
            alt="Medium Luis Filipe Alves de Oliveira"
            width={50}
            height={50}
          />
        </a>
      </section>

      <section className={emailStyles.container}>
        <a href="mailto:lfoliveira.dev@gmail.com">lfoliveira.dev@gmail.com</a>
      </section>
    </Layout>
  );
}
