import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "./AppContainer.module.css"

const AppContainer = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={styles.appContainerStyle}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppContainer;