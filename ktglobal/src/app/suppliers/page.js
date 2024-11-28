import React from "react";

const SuppliersPage = () => {
  return (
    <div className="suppliers-page">
      <header className="header">
        <div className="logo">Rosehan Trade</div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/suppliers">Suppliers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h1>Our Suppliers</h1>
          <p>Discover our trusted network of suppliers around the globe.</p>
        </section>

        <section className="suppliers-list">
          <h2>Featured Suppliers</h2>
          <ul>
            <li>Supplier 1 - Description</li>
            <li>Supplier 2 - Description</li>
            <li>Supplier 3 - Description</li>
            {/* Add more suppliers dynamically here */}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rosehan Trade. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SuppliersPage;
