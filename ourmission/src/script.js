
const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Misyonumuz</h1>

      <div className="div">
        <p className="text">
          Şirketimiz, global ticaretin her yönünde aktif olarak yer alarak, ithalat, ihracat, gümrükleme, danışmanlık ve eğitim hizmetleri sunmaktadır. 
          Amacımız, müşterilerimize ticaret süreçlerini daha verimli ve güvenli hale getirmek için kapsamlı çözümler sağlamak ve her alanda yüksek kaliteyi benimsemektir.
          Gümrükleme ve danışmanlık hizmetlerimizle, yerel ve uluslararası ticarette yapılması gereken desteği sunmakla birlikte, geniş kitlelere yönelik eğitim programlarımızla da 
          iş gücünün bilgi ve becerilerini geliştirmeyi hedefliyoruz. Yerel ve uluslararası pazarlarda, müşterilerimize sürdürülebilir ticaret fırsatları sunmak ve sektördeki en iyi çözümleri 
          sağlamak için sürekli yenilik yapmayı ilke ediniyoruz.
        </p>
      </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));