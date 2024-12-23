import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

function Privilages() {
  return (
    <body>
    <h1 class = "title"> Ayrıcalıklarımız </h1>
 <div class = "div">
   
   <p class ="text"> Şirketimiz, güvenli, hızlı ve ekonomik lojistik çözümleriyle müşterilerine ayrıcalıklı bir deneyim sunar. Her aşamada müşteri isteklerini ve ihtiyaçlarını ön planda tutarak, yapıcı çözümler sunarız. İthalat, ihracat ve gümrükleme süreçlerinde, müşterilerimizin taleplerine en uygun ve verimli hizmeti sağlamak için sürekli olarak çözümler geliştiririz. Ticaretin her aşamasında şeffaflık sağlayarak, güvenilirliğimizi pekiştirir ve müşterilerimize sorunsuz bir ticaret deneyimi sunarız. </p>
   
   </div>
</body>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Privilages />);

