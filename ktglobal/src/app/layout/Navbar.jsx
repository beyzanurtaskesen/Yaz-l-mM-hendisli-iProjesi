"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
  
  <nav className = {styles.nav}>
      <ul>
        <a className = {styles.navLinks} href="https://github.com">Anasayfa</a>
        <a className = {styles.navLinks} href=" ">Biz Kimiz</a>
        <a className = {styles.navLinks} href=" ">Ürünlerimiz</a>
        <a className = {styles.navLinks} href=" ">Hizmetlerimiz</a>
        <a className = {styles.navLinks} href=" ">KaliTeli Ticaret</a>
      </ul>
  </nav>
  );
};
