import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src="/img/wathqny-hero.png" className={styles.img} />
        <div className={styles.buttons}>
          <Link
            className="my-btn"
            to="/docs">
            هيا نبدأ
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  return (
    <Layout
      title='الرئسية'
      description="مستندات عالمية باللغة العربية">
      <HomepageHeader />
    </Layout>
  );
}
