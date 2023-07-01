import React from "react";
import styles from "./header.module.scss";

import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import logo from "../../assets/svg/logo-icon.svg";

import { BsPinterest } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

export function Header() {
  return (
    <React.Fragment>
      <div className={styles["header_wrapper"]}>
        {/* Side 1 */}
        <div className={styles["icon_nav-side"]}>
          <div className={styles["logo"]}>
            <img src={logo} alt="Atlas Logo" />
            <span>Atlas</span>
          </div>

          <div className={styles["navbar"]}>
            <nav>
              <ul>
                <li>
                  <a href="">
                    <span>Categories</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>About Me</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Side 2 */}
        <div className={styles["search_social-side"]}>
          <div className={styles["search-bar"]}>
            <div className={styles["searchbar-container"]}>
              <span><FiSearch /></span>
              <input type="text" placeholder="Search"/>
            </div>
          </div>

          <div className={styles["social-icons"]}>
            <nav>
              <ul>
                <li>
                  <a href="">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsPinterest />
                  </a>
                </li>
                <li>
                  <a href="">
                    <AiFillYoutube />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
