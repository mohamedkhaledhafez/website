import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import "../css/custom.css";

const features = [
  {
    title: "We love tech",
    imageUrl: "img/undraw_code.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Blogs about the latest in tech",
    imageUrl: "img/undraw_blog.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/undraw_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  // {
  //   title: "Powered by Mohamed ",
  //   imageUrl: "img/featImg1.png",
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
  // {
  //   title: "Powered by Mohamed ",
  //   imageUrl: "img/featImg2.png",
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
  // {
  //   title: "Powered by Mohamed ",
  //   imageUrl: "img/featImg3.png",
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  console.log(siteConfig);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="techfellows tech blog free online guides videos covering coding, reactjs, javascript, html, css tutorials and algorithm questions for all your developer needs."
    >
      {/*<header className={clsx("hero hero--primary", styles.heroBanner)}>*/}
      <header className={styles.features}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg mx-3 px-3 tutorial",
                styles.getStarted
              )}
              to={useBaseUrl("docs")}
            >
              Tutorials
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg mx-3 px-3 blog",
                styles.getStarted
              )}
              to={useBaseUrl("Blog")}
            >
              Blogs
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg mx-3 px-3 problem",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction")}
            >
              Solve a problem.
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
