const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Kapsam</h1>
      <h3 class= "altbaslik"> Kapsamlı Ticaret Hizmetleri </h3>

      <div className="div">
        <p className="text">
         Şirketimiz, dünya çapında ithalat ve ihracat hizmetleri sunmaktadır. Geniş ürün yelpazemizle, her sektöre yönelik tedarik çözümleri sağlıyor, adreslerinizden adrese teslim yaparak müşterilerimize kapsamlı hizmetler sunuyoruz. Hedeflediğimiz pazarlar arasında Avrupa, Asya, Amerika ve Afrika yer alırken, her bölgenin ihtiyaçlarına özel çözümler geliştirmekteyiz.
        </p>
      </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));