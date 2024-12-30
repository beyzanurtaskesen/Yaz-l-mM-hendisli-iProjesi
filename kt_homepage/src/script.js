import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

function HomePage() {
  return (
    <main>
      {/* Section Zero*/}
       <section id="sectionZero">
        <div>
          <img id="kt" src="https://github.com/beyzanurtaskesen/YazilimMuhendisligi_Projesi/blob/main/KT_mainpage.png?raw=true"></img>
          </div>
</section>
         
      {/* Section One - About Us */}
      <section id="sectionOne">
        <h1 className="title">Bizi Yakından Tanıyın</h1>
        <p id="theText">Bizi yakından tanıyarak hakkımızda daha fazla bilgi edinin.</p>

        <div className="about-us-section">
          <h3 id="midHeader">Misyonumuz</h3>
          <p id="paragraph">Şirketimiz, global ticaretin her yönünde aktif olarak yer alarak, ithalat, ihracat, gümrükleme...</p>
          <a href="#" className="read-more">Devamını Oku →</a>
        </div>

        <div className="about-us-section">
          <h3 id="midHeader">Vizyonumuz</h3>
          <p id="paragraph">Vizyonumuz, ithalat ve ihracat sektöründe küresel ölçekte en tercih edilen iş ortağı olmak ve...</p>
          <a href="#" className="read-more">Devamını Oku →</a>
        </div>

        <div className="about-us-section">
          <h3 id="midHeader">Kapsamımız</h3>
          <p id="paragraph">Şirketimiz, dünya çapında ithalat ve ihracat hizmetleri sunmaktadır. Geniş ürün yelpazemizle...</p>
          <a href="#" className="read-more">Devamını Oku →</a>
        </div>

        <div className="about-us-section">
          <h3 id="midHeader">Kültürümüz</h3>
          <p id="paragraph">Çalışma kültürümüz, yenilikçi, girişimci ve sorumluluk sahibi bir anlayışla şekillenmektedir. Hem yerel hem de uluslararası...</p>
          <a href="#" className="read-more">Devamını Oku →</a>
        </div>

        <div className="about-us-section">
          <h3 id="midHeader">Ayrıcalıklarımız</h3>
          <p id="paragraph">Şirketimiz, güvenli, hızlı ve ekonomik lojistik çözümleriyle müşterilerine ayrıcalıklı bir deneyim...</p>
          <a href="#" className="read-more">Devamını Oku →</a>
        </div>

        <div className="about-us-section">
          <h3 id="midHeader">Değerlerimiz</h3>
          <ul id="list">
            <li>Güven</li>
            <li>Şeffaflık</li>
            <li>Müşteri odaklılık</li>
            <li>İnovasyon ve sürekli gelişim</li>
          </ul>
        </div>
      </section>

      {/* Section Two - Products */}
      <section id="sectionTwo">
        <h2 className="title">Ürünlerimiz</h2>
        <div className="urunler">
          <input
            type="button"
            className="button"
            value="<"
            onClick={changePhotoBefore}
          />
          <img
            id="img"
            src="https://sizindukkan.com/cdn/shop/products/madrid-koltuk-takimi_1.jpg?v=1710748272"
            alt="Product Display"
          />
          <input
            type="button"
            className="button"
            value=">"
            onClick={changePhotoNext}
          />
        </div>
      </section>
    </main>
  );
}

// Render React App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage />);

// Image Carousel Logic
let currentIndex = 0;
const images = [
  "https://normev.com/cdn/shop/files/normev-miran-koltuk-takimi-inegol-mobilya-salon-ve-oturma-grubu-1.jpg?v=1716893343&width=1080",
  "https://asmakinaesanjor.com.tr/wp-content/uploads/2016/10/endustriyel_makine_uretimi_main-1.jpg",
  "https://www.ozkapsan.com/img/celik-kapi-modelleri/premium-serisi/premium-serisi-celik-kapilar-category-min.jpg",
  "https://eminkapiosmaniye.com/wp-content/uploads/2022/05/slider5.jpg",
  "https://www.yoncamtemper.com/public/detay_resimler/1587301002_duz-cam.jpg",
  "https://ideacdn.net/shop/df/64/myassets/products/849/iki-duvararasi-dusakabin-2-sabit-2-kayar.jpg?revision=1697143329",
];

function changePhotoNext() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("img").src = images[currentIndex];
}

function changePhotoBefore() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("img").src = images[currentIndex];
}
