
import React from "react";
import styles from "./suppliers.module.css";


const SuppliersPage = () => {
  const suppliers = [
    { id: 1, name: "Kumtel A.Ş", description: "Leading manufacturer of home appliances.", image: "Kumte-logo.png"},
    { id: 2, name: "Sefa Çelik Kapı", description: "High-quality steel door producer.", image: "sefa-logo.png"},
    { id: 3, name: "Jummimen Glass Co.", description: "Innovative glass solutions worldwide." },
  ];

  return (
    <div className={styles.SContainer}>
      <h1 className={styles.STitle}>Tedarikçilerimiz</h1>
      <div className={styles.SList}>
        {suppliers.map((supplier) => (
          <div key={supplier.id} className={styles.SCard}>
            <div className={styles.SImage}>
            <img src={supplier.image} />
            </div>
            <br></br> 
            <h2 className={styles.SName}>{supplier.name}</h2>
            <p className={styles.SDescription}>{supplier.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersPage;