import React from "react";
import styles from "./styles.module.scss";
import { SearchBar } from "../search-bar/searchBar";

export function Hero() {
  return (
    <React.Fragment>
      <div className={styles["hero_wrapper"]}>
        <div className={styles["hero_information"]}>
          <p className={styles["highlight"]}>WELCOME TO MY BLOG</p>
          <h1>
            We all owe
            <br />
            death a life <span></span>
          </h1>
          <p className={styles["hero_description"]}>
            Here is a place that I share my writings about design <br /> and
            photography. Read, write & discuss with me.
          </p>
          <SearchBar />
        </div>
        <div className={styles["left-spacer"]}></div>
      </div>
    </React.Fragment>
  );
}
