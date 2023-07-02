import React from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import styles from "./styles.module.scss";
import { Header, Hero, FeaturedCard } from "../../components";

import { Data } from "../../data";

export function Home() {
  const { featuredPost } = Data();

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
        <main>
          <div className={styles["featured_carousel"]}>
            {featuredPost.map((value) => {
              return (
                <FeaturedCard
                  image={value.image}
                  tittle={value.tittle}
                  excert={value.excert}
                  comments={value.comments}
                  views={value.views}
                />
              );
            })}
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
