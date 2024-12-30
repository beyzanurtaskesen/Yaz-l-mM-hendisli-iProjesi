const { useState } = React;

function App() {
  return (
    <div className="App">
           <h1 class= "title" >Güven,Şeffaflık Ve İnovasyon </h1>

      <div className="div">
    <p class="text"> Güven: İş ortaklarımıza ve müşterilerimize karşı dürüst, güvenilir ve şeffaf bir yaklaşım sergileyerek, uzun vadeli ilişkiler kurmayı ilke ediniriz.</p>
    <p class="text">Şeffaflık: Ticaretin her aşamasında şeffaflık sağlamak, müşteri memnuniyetini en üst düzeye çıkarmak için önceliğimizdir.
 </p>
    <p class="text"> Müşteri Odaklılık: Müşterilerimizin ihtiyaçlarını en iyi şekilde anlamak ve onlara en uygun çözümleri sunmak, iş anlayışımızın temelini oluşturur.</p>
    <p class="text"> İnovasyon ve Sürekli Gelişim: Ticaretin her aşamasında yenilikçi çözümler geliştirmek ve süreçlerimizi sürekli iyileştirerek sektördeki liderliğimizi pekiştirmek bizim için esastır..</p>
 
  </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));