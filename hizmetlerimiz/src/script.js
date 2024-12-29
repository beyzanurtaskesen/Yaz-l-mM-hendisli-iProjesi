const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Hizmetlerimiz</h1>

      <div className="div">
        <li>İthalat</li>
        <p className="text">
        Uluslararası ticaretin gereksinimlerine uygun olarak, gümrükleme ve lojistik süreçlerini profesyonelce yönetiyoruz. Her iki tarafın da ihtiyaçları doğrultusunda en uygun çözümleri sunuyoruz. Geniş ürün yelpazemizle, her sektöre yönelik tedarik çözümleri sağlıyor, adreslerinizden adrese teslim yaparak müşterilerimize kapsamlı hizmetler sunuyoruz. </p>
         <li>İhracat</li>
      <p className="text">Gümrük işlemlerinden lojistiğe kadar tüm ihracat süreçlerindeki detayları yönetiyor,ticaret süreçlerinizi daha verimli ve güvenli  hale getiriyoruz. Müşterilerimizin taleplerine en uygun ve verimli hizmeti sağlamak için sürekli olarak çözümler geliştiriyoruz.
</p>
        <li>Gümrükleme</li>
      <p className="text">Ticaretin kritik bir aşaması olan gümrükleme süreçlerinde, tüm yasal düzenlemelere uygun hareket eder ve hızlı, güvenli lojistik çözümleriyle teslimatları gerçekleştiririz.</p>
        <li>Danışmanlık</li>
      <p className="text">Her müşterimizin ticaret ihtiyaçlarını anlamak için ayrıntılı bir analiz yapar, ithalat ve ihracat süreçleri konusunda uzman danışmanlık hizmetleri sunarız. Hedef pazarlarınızı analiz ederek, doğru kararlar almanızı sağlarız.</p>
        <li>Eğitim</li>
      <p className="text"> Lojistik süreçlerinizi optimize etmek için gerekli bilgi ve becerileri kazandırıyoruz.Gümrük mevzuatındaki güncel gelişmeleri takip ederek, eğitim almak isteyen adayların bilgi ve becerilerini geliştiriyoruz.</p>
      </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));