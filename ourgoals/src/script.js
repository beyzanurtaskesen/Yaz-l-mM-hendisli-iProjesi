
const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Hedeflerimiz</h1>

      <div className="div">
        <p className="text">
          Uluslararası Ticarette Güçlü Bir Konum Edinmek
Global ticaretin dinamiklerine uyum sağlayarak, yerel ve uluslararası pazarda stratejik bir büyüme hedefliyoruz.
İthalat, ihracat ve gümrükleme süreçlerindeki uzmanlığımızı daha da derinleştirerek, sektördeki liderliğimizi pekiştirmeyi amaçlıyoruz.
Müşteri odaklı yaklaşımımızla, yerel ve uluslararası pazarlarda güvenilirliğimizi artırarak müşteri memnuniyetini en üst düzeye çıkarmayı hedefliyoruz.
İnovasyon ve sürekli gelişim anlayışımızla, ticaretin her aşamasında mükemmeliyetçi bir yaklaşımı sürdürerek, sektördeki en iyi çözümleri sunmayı hedefliyoruz.
        </p>
      </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));