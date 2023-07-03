import React from "react";
import styles from "./styles.module.scss";

import { FiMessageSquare, FiEye } from "react-icons/fi";

export function FeaturedCard(props) {
  const { image, tittle, excert, comments, views } = props;

  return (
    <React.Fragment>
      <div className={styles["card_wrapper"]}>
        <div className={styles["card_image-container"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles["tittle_container"]}>
          <span>{tittle}</span>
        </div>
        <div className={styles["card_description"]}>
          <span>{excert}</span>
        </div>
        <div className={styles["card_footer"]}>
          <span>
            <FiMessageSquare /> {comments}
          </span>
          <span>
            <FiEye /> {views}K
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
