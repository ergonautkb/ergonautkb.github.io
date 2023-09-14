import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image?: string;
  description: JSX.Element;
  link: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Craft Your Comfort",
    description: (
      <>
        Comprehensive guides to help you assemble your Ergonaut Keyboard and
        customize it to your needs.
      </>
    ),
    // image: "/img/undraw-mg-community.svg",
    link: "/blog",
    linkText: "Build Guides",
  },
  {
    title: "Ergo Insights",
    // image: "/img/undraw-mg-book.svg",
    description: (
      <>
        Stay updated with the latest trends in ergonomic technology, product
        updates, and user stories from the Ergonaut Keyboards community.
      </>
    ),
    link: "/blog",
    linkText: "Our Blog",
  },
  {
    title: "In-depth Knowledge, Simplified",
    // image: "/img/undraw-mg-mundo.svg",
    description: (
      <>
        Find all technical specifications, troubleshooting steps, and detailed
        instructions to enhance your Ergonaut Keyboard experience.
      </>
    ),
    link: "/blog",
    linkText: "Tech Specs",
  },
];

function Feature({ title, image, description, link, linkText }: FeatureItem) {
  return (
    <div className={clsx("col col--4", "padding-bottom--lg")}>
      {image && (
        <div className="text--center">
          <img
            className={styles.featureSvg}
            src={useBaseUrl(image)}
            alt={title}
          />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3 className="header-pill">{title}</h3>
        <p>{description}</p>
        <Link className="button button--secondary button--lg" to={link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={clsx(styles.features)}>
        <div className={clsx(styles.featuresContainer, "margin--xl")}>
          <div className={clsx("row")}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
