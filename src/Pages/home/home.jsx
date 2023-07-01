import React from "react";
import { Header, Hero } from "../../components";

import styles from './styles.module.scss'

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <section className={styles["featured_posts"]}>
        <div className={styles["header-section"]}>
          <div>
            <span className={styles["section_tittle"]}>Featured posts</span>
          </div>

          <div className={styles["section_buttons"]}>
            <button className={styles["btn_left"]}>
              <FiArrowLeft />
            </button>
            <button className={styles["btn_right"]}>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
