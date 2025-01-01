"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (

    <nav>
      <ul className={styles.list}>
        <li className={styles.dropdown}> <img id="kt" src="KT_navbar.png"></img> </li>
        <li className={styles.dropdown}> <a class = "navIndexs" href="https://github.com">Anasayfa</a></li>
        <li className={styles.dropdown}> <a class = "navIndexs" href=" ">Biz Kimiz</a>
          <ul className={styles.dropdownMenu}>
            <li><a class = "dropdown-menu-links" href="  ">Vizyonumuz</a></li>
            <li><a class = "dropdown-menu-links" href="#">Misyonumuz</a></li>
            <li><a class = "dropdown-menu-links" href="#">Kapsam</a></li>
            <li><a class =  "dropdown-menu-links" href="#">Kültürümüz</a></li>
            <li><a class =  "dropdown-menu-links" href="#">Ayrıcalıklarımız</a></li>
            <li><a class =  "dropdown-menu-links" href="#">Hedeflerimiz</a></li>
            <li><a class =  "dropdown-menu-links" href="#">Değerlerimiz</a></li>
          </ul></li>
        <li class="dropdown"> <a class = "navIndexs" href=" ">Ürünlerimiz</a> </li>
        <li class="dropdown"> <a class = "navIndexs" href=" ">Hizmetlerimiz</a> </li>
        <li class="KT"> <a class = "navIndexs" href=" ">KaliTeli Ticaret</a></li>
      </ul>
    </nav>
  );
};
