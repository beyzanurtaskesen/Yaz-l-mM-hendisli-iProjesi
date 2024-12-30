"use client";
import React, { useState } from "react";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className = {styles.footer}>
   <table className = {styles.table}>
   <tr>
     <td>
       <img className ={styles.logo} src="https://lh3.googleusercontent.com/pw/AP1GczOsahch0Zj4H8FxQw1xECWAZHqf9Lo4oEO1ex-OOOKLy-jCPyU5UE_uXRlX0rkebHMlsfIcOFyNww8JEuwHLAUSV5Co4lJJyMgQheFp8H7qAa8TZFJpGIvzqVPUQAktD3mozKKt0IZaB6TVEsiIVteEe8BLV8DsgNLJBUlNVmILAx3AVxwUy_P7ZoG7K1t-qB-6uKqoE_IdLCOOPRyB6ykU6E5_beUNaL-03zHzhIuJ7BqV7fICxZPsW6_S2MYlC5-OWRnQxVH4p6RBUzgP0FtHnGL5SGR9b-xyZtnL170VUlHomFVrqaiXQDZVXjl9ACEz2EPmVTaL5fTGIDNNSUL5lULC2j1fqWqcsCpGkAkHduJ8TEYuvz-bDmW2qFb2grtNgXK32obLJoLBpVENQ4gm13c9xahr-ECy798jYAOkvIsEnoOQ5bR7rr_Dcsf419r38GwTKYccCpcbgkdEBfTpX6F_lQev9YOdFfCJ5p-SONiorZbJV4CgCEPOdEVk1wAqIv8l6xaQIhQFT51TZVrq6_jdvMy4TT--c7-NgYz90QrYkDTEFdd9_sxPpsu_M6fbzeTiDI8o4JRbd9maq-tbWHl3orXVlyxM_5sVldEqCbIyHLLRWCyjKLTlYXwVDba5lN8zYMmERwCuCuJ4GokNbAygJGA0TcOlyds-inOrwBi6PeZX_3w-6Dqh0VWviRd60pwYkbtWe1VC5Ig83MmrEWyxW3Ebh2qjaJgrCmyWjmBmeLBNLEZLOazkSKbvg8imLKRydnAseAajbf5ujXVeHSvOM3yLiTcvXIZNn5c20NsVkJwp36ETlo-inOd6iEtJnlMU88Jo4ZdVB5SFT35Sic37lJ6vFGkNFfpO-K7JmZ2cL0ghRwhr00GLEzA1y6W40_XgKVOvyoNmFmm_fFVN5HUl7Xd82w4AwOmBBv2q8q8l3DRhNamLO1Xre5d5-Mn0tx_dSXgViHwXcTnc7V7HQJWJ0QdP-w=w1280-h960-s-no?authuser=0" width="50%"></img>
     </td>
     <td>
      <div className={styles.FastMenu}>
       <h3 className = {styles.footerHeader}> Hızlı Menü </h3>
      <ul>
        <li> <a className = {styles.footerLinks} href=" ">Anasayfa</a> </li>
        <li> <a className = {styles.footerLinks} href=" ">Hedeflerimiz</a> </li>
        <li> <a className = {styles.footerLinks} href=" ">Kültürümüz</a> </li>
        <li> <a className = {styles.footerLinks} href=" ">Kariyer</a> </li>
        <li> <a className = {styles.footerLinks} href=" ">İletişim</a> </li>
      </ul>
      </div>
     </td>
     <td>
      <div className={styles.ContactUs}>
      <h3 className = {styles.footerHeader}> Bize Ulaşın </h3>
      <ul>
        <li><h4>Adres:</h4> <p>Safir Center Kayseri Organize Sanayi Bölgesi, 8. sokak No :3, 38070 Melikgazi / Kayseri</p></li>
        <li><h4>E-Mail:</h4> <p>kttradecustoms@outlook.com</p></li>
        <li><h4>Telefon:</h4> <p>+90 536 305 49 09</p></li>
      </ul>
      </div>
      </td>
     </tr> 
   </table>
</footer>
  );
};
