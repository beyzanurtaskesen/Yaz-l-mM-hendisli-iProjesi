import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

function Privileges() {
  return (
    <div className="container">
      <h1 className="title">Ayrıcalıklarımız</h1>
      <div className="content">
        <p className="text">
          Şirketimiz, güvenli, hızlı ve ekonomik lojistik çözümleriyle
          müşterilerine ayrıcalıklı bir deneyim sunar. Her aşamada müşteri
          isteklerini ve ihtiyaçlarını ön planda tutarak, yapıcı çözümler
          sunarız. İthalat, ihracat ve gümrükleme süreçlerinde, müşterilerimizin
          taleplerine en uygun ve verimli hizmeti sağlamak için sürekli olarak
          çözümler geliştiririz. Ticaretin her aşamasında şeffaflık sağlayarak,
          güvenilirliğimizi pekiştirir ve müşterilerimize sorunsuz bir ticaret
          deneyimi sunarız.
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Privileges />);