import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/index.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Subway Builder Mods, Maps, and Installation Guides">
      <main className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Subway Builder Modded Wiki
          </h1>

          <p className={styles.subtitle}>
            The complete hub for Subway Builder maps, mods, and guides.
            Discover custom maps, expand your game with community-made content,
            and learn exactly how to install everything step-by-step.
          </p>

          <div className={styles.buttons}>
            <Link
              className={`${styles.button} ${styles.primary}`}
              to="/wiki/maps/map-directory">
              Browse Maps
            </Link>

            <Link
              className={`${styles.button} ${styles.primary}`}
              to="/wiki/guides/map-installation-guide">
              Installation Guide
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
