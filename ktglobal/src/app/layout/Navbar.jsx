"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css"
import ForexComponent from "@/app/components/forexComponent/ForexComponent"

export default function Navbar() {
  return (

    <nav>
      <ul className="styles.list">
        <li className="styles.dropdown"> <img id="kt" src="KT_navbar.png"></img> </li>
        <li className="styles.dropdown"> <a className = "styles.navIndexs" href="https://github.com">Anasayfa</a></li>
        <li className="styles.dropdown"> <a className = "styles.navIndexs" href=" ">Biz Kimiz</a>
          <ul className="styles.dropdown-menu">
            <li><a className = "styles.dropdown-menu-links" href="  ">Vizyonumuz</a></li>
            <li><a className = "styles.dropdown-menu-links" href="#">Misyonumuz</a></li>
            <li><a className = "styles.dropdown-menu-links" href="#">Kapsam</a></li>
            <li><a className =  "styles.dropdown-menu-links" href="#">Kültürümüz</a></li>
            <li><a className =  "styles.dropdown-menu-links" href="#">Ayrıcalıklarımız</a></li>
            <li><a className =  "styles.dropdown-menu-links" href="#">Hedeflerimiz</a></li>
            <li><a className =  "styles.dropdown-menu-links" href="#">Değerlerimiz</a></li>
          </ul></li>
        <li className="styles.dropdown"> <a className = "navIndexs" href=" ">Ürünlerimiz</a> </li>
        <li className="styles.dropdown"> <a className = "navIndexs" href=" ">Hizmetlerimiz</a> </li>
        <li className="styles.KT"> <a className = "navIndexs" href=" ">KaliTeli Ticaret</a></li>
      </ul>
    </nav>
  );
};
