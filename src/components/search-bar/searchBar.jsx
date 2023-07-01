import React from "react";
import styles from './styles.module.scss'


export function SearchBar() {
    return (
        <React.Fragment>
            <div className={styles["search_bar-wrapper"]}>
                <input type="text" placeholder="Email"/>
                <button className={styles["btn-search"]}>Subscribe</button>
            </div>
        </React.Fragment>
    )
}