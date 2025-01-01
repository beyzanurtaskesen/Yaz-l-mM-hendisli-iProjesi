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
            <li><a href="  ">Vizyonumuz</a></li>
            <li><a href="#">Misyonumuz</a></li>
            <li><a href="#">Kapsam</a></li>
            <li><a href="#">Kültürümüz</a></li>
            <li><a href="#">Ayrıcalıklarımız</a></li>
            <li><a href="#">Hedeflerimiz</a></li>
            <li><a href="#">Değerlerimiz</a></li>
          </ul></li>
        <li className={styles.dropdown}> <a className={styles.navIndexs} href=" ">Ürünlerimiz</a> </li>
        <li className={styles.dropdown}> <a className={styles.navIndexs} href=" ">Hizmetlerimiz</a> </li>
        <li className={styles.KT}> <a className={styles.navIndexs} href=" ">KaliTeli Ticaret</a></li>
      </ul>
    </nav>
  );
};
