
import React from "react";
import styles from "./suppliers.module.css";


const SuppliersPage = () => {
  const suppliers = [
    { id: 1, name: "Kumtel A.Ş", description: "Leading manufacturer of home appliances.", image: "Kumte-logo.png"},
    { id: 2, name: "Sefa Çelik Kapı", description: "High-quality steel door producer.", image: "sefa-logo.png"},
    { id: 3, name: "Jummimen Glass Co.", description: "Innovative glass solutions worldwide.", image:"logo.png" },
  ];
  const musavirlik = [
    { id: 1, name: "Gürdal Gümrük Müşavirliği", description: "Gürdal Gümrük Müşavirliği", image: "logo.png"},
  ]
  const groupCompany = [
    { id: 1, name: "Sultan Global Gıda İthalat İhracat Limited Şirketi", description: "Sultan Global Gıda İthalat İhracat Limited Şirket", image: "logo.png"}
  ]

  return (
    <div className={styles.SContainer}>
      <h1 className={styles.STitle}></h1>
      <h1 className={styles.blueShape}>Tedarikçilerimiz</h1>
      <div className={styles.SList}>
        {suppliers.map((supplier) => (
          <div key={supplier.id} className={styles.SCard}>
            <div className={styles.SImage}>
            <img src={supplier.image} />
            </div>
            <br></br> 
            <div className={styles.SNameContainer}>
              <h2 className={styles.SName}>{supplier.name}</h2>
            </div>
            <p className={styles.SDescription}>{supplier.description}</p>
          </div>
        ))}
      </div>

      <h1 className={styles.blueShape}>Grup Şirketler</h1>
      <div className={styles.SList}>
        {groupCompany.map((supplier) => (
          <div key={supplier.id} className={styles.SCard}>
            <div className={styles.SImage}>
            <img src={supplier.image} />
            </div>
            <br></br> 
            <div className={styles.SNameContainer}>
              <h2 className={styles.SName}>{supplier.name}</h2>
            </div>
            <p className={styles.SDescription}>{supplier.description}</p>
          </div>
        ))}
      </div>

      <h1 className={styles.blueShape}>Müşavirlikler</h1>
      <div className={styles.SList}>
        {musavirlik.map((supplier) => (
          <div key={supplier.id} className={styles.SCard}>
            <div className={styles.SImage}>
              <img src={supplier.image} />
            </div>
            <br></br> 
            <div className={styles.SNameContainer}>
              <h2 className={styles.SName}>{supplier.name}</h2>
            </div>
            <p className={styles.SDescription}>{supplier.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersPage;