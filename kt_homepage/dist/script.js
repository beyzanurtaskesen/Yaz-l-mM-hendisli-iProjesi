import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

function MyHomePage() {
  return /*#__PURE__*/(
    React.createElement("main", null, /*#__PURE__*/

    React.createElement("section", { id: "sectionZero" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { id: "kt", src: "KT_mainpage.png" }))), /*#__PURE__*/




    React.createElement("section", { id: "sectionOne" }, /*#__PURE__*/
    React.createElement("h1", { className: "title" }, "Bizi Yak\u0131ndan Tan\u0131y\u0131n"), /*#__PURE__*/
    React.createElement("p", { id: "theText" }, "Bizi yak\u0131ndan tan\u0131yarak hakk\u0131m\u0131zda daha fazla bilgi edinin."), /*#__PURE__*/

    React.createElement("div", { className: "about-us-section" }, /*#__PURE__*/
    React.createElement("h3", { id: "midHeader" }, "Misyonumuz"), /*#__PURE__*/
    React.createElement("p", { id: "paragraph" }, "\u015Eirketimiz, global ticaretin her y\xF6n\xFCnde aktif olarak yer alarak, ithalat, ihracat, g\xFCmr\xFCkleme..."), /*#__PURE__*/
    React.createElement("a", { href: "#", className: "read-more" }, "Devam\u0131n\u0131 Oku \u2192")), /*#__PURE__*/


    React.createElement("div", { className: "about-us-section" }, /*#__PURE__*/
    React.createElement("h3", { id: "midHeader" }, "Vizyonumuz"), /*#__PURE__*/
    React.createElement("p", { id: "paragraph" }, "Vizyonumuz, ithalat ve ihracat sekt\xF6r\xFCnde k\xFCresel \xF6l\xE7ekte en tercih edilen i\u015F orta\u011F\u0131 olmak ve..."), /*#__PURE__*/
    React.createElement("a", { href: "#", className: "read-more" }, "Devam\u0131n\u0131 Oku \u2192")), /*#__PURE__*/


    React.createElement("div", { className: "about-us-section" }, /*#__PURE__*/
    React.createElement("h3", { id: "midHeader" }, "Kapsam\u0131m\u0131z"), /*#__PURE__*/
    React.createElement("p", { id: "paragraph" }, "\u015Eirketimiz, d\xFCnya \xE7ap\u0131nda ithalat ve ihracat hizmetleri sunmaktad\u0131r. Geni\u015F \xFCr\xFCn yelpazemizle..."), /*#__PURE__*/
    React.createElement("a", { href: "#", className: "read-more" }, "Devam\u0131n\u0131 Oku \u2192")), /*#__PURE__*/


    React.createElement("div", { className: "about-us-section" }, /*#__PURE__*/
    React.createElement("h3", { id: "midHeader" }, "K\xFClt\xFCr\xFCm\xFCz"), /*#__PURE__*/
    React.createElement("p", { id: "paragraph" }, "\xC7al\u0131\u015Fma k\xFClt\xFCr\xFCm\xFCz, yenilik\xE7i, giri\u015Fimci ve sorumluluk sahibi bir anlay\u0131\u015Fla \u015Fekillenmektedir. Hem yerel hem de uluslararas\u0131..."), /*#__PURE__*/
    React.createElement("a", { href: "#", className: "read-more" }, "Devam\u0131n\u0131 Oku \u2192")), /*#__PURE__*/


    React.createElement("div", { className: "about-us-section" }, /*#__PURE__*/
    React.createElement("h3", { id: "midHeader" }, "Ayr\u0131cal\u0131klar\u0131m\u0131z"), /*#__PURE__*/
    React.createElement("p", { id: "paragraph" }, "\u015Eirketimiz, g\xFCvenli, h\u0131zl\u0131 ve ekonomik lojistik \xE7\xF6z\xFCmleriyle m\xFC\u015Fterilerine ayr\u0131cal\u0131kl\u0131 bir deneyim..."), /*#__PURE__*/
    React.createElement("a", { href: "#", className: "read-more" }, "Devam\u0131n\u0131 Oku \u2192")), /*#__PURE__*/


    React.createElement("div", { className: "about-us-section" }, /*#__PURE__*/
    React.createElement("h3", { id: "midHeader" }, "De\u011Ferlerimiz"), /*#__PURE__*/
    React.createElement("ul", { id: "list" }, /*#__PURE__*/
    React.createElement("li", null, "G\xFCven"), /*#__PURE__*/
    React.createElement("li", null, "\u015Eeffafl\u0131k"), /*#__PURE__*/
    React.createElement("li", null, "M\xFC\u015Fteri odakl\u0131l\u0131k"), /*#__PURE__*/
    React.createElement("li", null, "\u0130novasyon ve s\xFCrekli geli\u015Fim")))), /*#__PURE__*/





    React.createElement("section", { id: "sectionTwo" }, /*#__PURE__*/
    React.createElement("h2", { className: "title" }, "\xDCr\xFCnlerimiz"), /*#__PURE__*/
    React.createElement("div", { className: "urunler" }, /*#__PURE__*/
    React.createElement("input", {
      type: "button",
      className: "button",
      value: "<",
      onClick: changePhotoBefore }), /*#__PURE__*/

    React.createElement("img", {
      id: "img",
      src: "https://sizindukkan.com/cdn/shop/products/madrid-koltuk-takimi_1.jpg?v=1710748272",
      alt: "Product Display" }), /*#__PURE__*/

    React.createElement("input", {
      type: "button",
      className: "button",
      value: ">",
      onClick: changePhotoNext })))));





}

// Render React App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(MyHomePage, null));

// Image Carousel Logic
let currentIndex = 0;
const images = [
"https://normev.com/cdn/shop/files/normev-miran-koltuk-takimi-inegol-mobilya-salon-ve-oturma-grubu-1.jpg?v=1716893343&width=1080",
"https://asmakinaesanjor.com.tr/wp-content/uploads/2016/10/endustriyel_makine_uretimi_main-1.jpg",
"https://www.ozkapsan.com/img/celik-kapi-modelleri/premium-serisi/premium-serisi-celik-kapilar-category-min.jpg",
"https://eminkapiosmaniye.com/wp-content/uploads/2022/05/slider5.jpg",
"https://www.yoncamtemper.com/public/detay_resimler/1587301002_duz-cam.jpg",
"https://ideacdn.net/shop/df/64/myassets/products/849/iki-duvararasi-dusakabin-2-sabit-2-kayar.jpg?revision=1697143329"];


function changePhotoNext() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("img").src = images[currentIndex];
}

function changePhotoBefore() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("img").src = images[currentIndex];
}