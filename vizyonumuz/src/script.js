const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Vizyonumuz</h1>

      <div className="div">
        <p className="text">
          Sınırları Aşan Ticaretin Lideri Olmak.
      Vizyonumuz, ithalat ve ihracat sektöründe küresel ölçekte en tercih edilen iş ortağı
      olmak ve sürdürülebilir, verimli ticaret süreçleriyle dünya genelindeki işletmelere
      hizmet sunmaktır. Kültürler arası işbirlikleri ve inovasyonla büyüyen, sürekli gelişen
      bir organizasyon olmak.
        </p>
      </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));