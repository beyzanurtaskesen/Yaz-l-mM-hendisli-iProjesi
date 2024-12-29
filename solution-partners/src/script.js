const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Çözüm Ortaklarımız</h1>

      <div className="div">
        <ol className="list">
      <li>AKS LOJİSTİK</li>
      <li>KNS LOJİSTİK</li>
      <li>AKKAN LOJİSTİK</li>
     <li>İPEK MOBİLYA</li>
        </ol>
      </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));