import React from "react";
import "./culture.module.css"; // CSS dosyasını unutmayın!

const Kulturumuz = () => {
  return (
    <div className="kulturumuz-container">
      <header className="header">
        <h1>Kültürümüz</h1>
        <p>Değerlerimiz, vizyonumuz ve iş anlayışımız...</p>
      </header>
      <section className="values-section">
        <div className="value-item">
          <h2>Vizyon</h2>
          <p>
            KT Global olarak müşteri odaklı yaklaşımımız ve sürekli gelişim
            stratejimizle sektör liderliğini hedefliyoruz.
          </p>
        </div>
        <div className="value-item">
          <h2>Misyon</h2>
          <p>
            Yaratıcı çözümlerimizle müşterilerimize değer katmak, iş dünyasında
            sürdürülebilir başarı sağlamak.
          </p>
        </div>
        <div className="value-item">
          <h2>Değerlerimiz</h2>
          <ul>
            <li>Dürüstlük ve Güvenilirlik</li>
            <li>Yenilikçilik</li>
            <li>Sürekli Gelişim</li>
            <li>Toplumsal Sorumluluk</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default function CulturePage() {
  return (
    <div>
      <h1>Kültürümüz</h1>
      <p>Bu sayfa şirketin değerlerini ve misyonunu tanıtır.</p>
    </div>
  );
}

