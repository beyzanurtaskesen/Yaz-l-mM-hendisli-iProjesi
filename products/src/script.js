const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Ürünlerimiz</h1>

       <div class= "photo-gallery">
   
       <h2 class = "title2"> Makine Tedariği </h2>
        <img src="https://asmakinaesanjor.com.tr/wp-content/uploads/2016/10/endustriyel_makine_uretimi_main-1.jpg" alt="makine tedariği"/>
       
       <h2 class = "title2"> Çelik Kapı </h2>
        <img src="https://www.ozkapsan.com/img/celik-kapi-modelleri/proje-serisi/proje-serisi-celik-kapilar-category-min.jpg" alt="Çelik kapı"/>
       
        <h2 class = "title2"> Mobilya </h2>
        <img src="https://normev.com/cdn/shop/files/normev-miran-koltuk-takimi-inegol-mobilya-salon-ve-oturma-grubu-1.jpg?v=1716893343&width=1080" alt="Mobilya"/>
       
     <h2 class = "title2">Cam </h2>
       
       <h4 class= "title3"> Düz Cam </h4>
        <img src="https://www.yoncamtemper.com/public/detay_resimler/1587301002_duz-cam.jpg" alt="Düz Cam"/>
       
        <h4 class= "title3">Duşakabin Camı </h4>
        <img src="https://ideacdn.net/shop/df/64/myassets/products/849/iki-duvararasi-dusakabin-2-sabit-2-kayar.jpg?revision=1697143329" alt="Duşakabin camı"/>
       
       <h4 class= "title3"> Fırın Camı</h4>
        <img src="https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/61061/uploads/urunresimleri/buyuk/kumtel-siyah-cam-ankastre-firin--99b-8d.jpg" alt="Fırın Cam"/>
       
        <h4 class= "title3"> Ocak Camı</h4>
        <img src="https://cdn.akakce.com/kumtel/kumtel-ko-40-tshdf-beyaz-cam-set-ustu-z.jpg" alt="ocak camı"/>
       
       <h2 class = "title2">Gıda </h2>
        <h4 class= "title3"> Kuru Kayısı</h4>
        <img src="https://gundogdukayisi.com/image/cache/catalog/urun-resimleri/dogal-sari-kuru-kayisi-1numara-600x315w.jpg" alt="kuru kayısı"/>
       
        <h4 class= "title3"> Kuru Üzüm</h4>
        <img src="https://cdn.kisikates.com.tr/image-cache/cache/post_main_image_large/https---cdn.kisikates.com.tr/post-main-image/4cf61ab79bfcdc7e6e7616494edd56ed302e5e3f.jpg" alt="kuru üzüm"/>
       
         <h4 class= "title3"> Ceviz</h4>
        <img src="https://www.birbes.com/wp-content/uploads/2018/05/Ceviz-Nedir-Faydalar%C4%B1-Ve-Zararlar%C4%B1-Nelerdir.jpg" alt="ceviz"/>
       
        <h4 class= "title3"> Hurma</h4>
        <img src="https://www.kardeslerosmaniye.com/wp-content/uploads/2021/11/dates-6638825_1920.jpg" alt="hurma"/>
       
       <h4 class= "title3"> Üzüm</h4>
        <img src="https://aslindacom.teimg.com/crop/1280x720/aslinda-com/uploads/2024/09/uzum-hangi-ayda-cikar-uzum-mevsimi-ne-zaman-baslar.jpg" alt="üzüm"/>
       
        <h4 class= "title3"> Kayısı</h4>
        <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/kayisi-diyeti-nedir-08bc7fa3-4e7c-49a8-8b0d-74c70d14c5f0" alt="kayısı"/>
    </div>
      </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));