let currentIndex = 0;
const resimler = ["https://asmakinaesanjor.com.tr/wp-content/uploads/2016/10/endustriyel_makine_uretimi_main-1.jpg", "https://www.ozkapsan.com/img/celik-kapi-modelleri/proje-serisi/proje-serisi-celik-kapilar-category-min.jpg", "https://normev.com/cdn/shop/files/normev-miran-koltuk-takimi-inegol-mobilya-salon-ve-oturma-grubu-1.jpg?v=1716893343&width=1080", "https://lh3.googleusercontent.com/proxy/lPhDrkf3i3KXZtxXvZry4qlMbyg7zs2wMbWA5hjgQZSFhunupBnxSPu1aEPBqN531gNJjMtSA9c83s52v1LY-wOXlxuFXwvD2jOBzNTIfyGWm9UKNbTI9HhPaME", "https://ideacdn.net/shop/df/64/myassets/products/849/iki-duvararasi-dusakabin-2-sabit-2-kayar.jpg?revision=1697143329", "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/61061/uploads/urunresimleri/buyuk/kumtel-siyah-cam-ankastre-firin--99b-8d.jpg", "https://cdn.akakce.com/kumtel/kumtel-ko-40-tshdf-beyaz-cam-set-ustu-z.jpg", "https://gundogdukayisi.com/image/cache/catalog/urun-resimleri/dogal-sari-kuru-kayisi-1numara-600x315w.jpg", "https://cdn.kisikates.com.tr/image-cache/cache/post_main_image_large/https---cdn.kisikates.com.tr/post-main-image/4cf61ab79bfcdc7e6e7616494edd56ed302e5e3f.jpg", "https://www.birbes.com/wp-content/uploads/2018/05/Ceviz-Nedir-Faydalar%C4%B1-Ve-Zararlar%C4%B1-Nelerdir.jpg", "https://ikramhurma.com/wp-content/uploads/2023/02/medine-mebrum-hurma-5.jpg", "https://aslindacom.teimg.com/crop/1280x720/aslinda-com/uploads/2024/09/uzum-hangi-ayda-cikar-uzum-mevsimi-ne-zaman-baslar.jpg", "https://i.lezzet.com.tr/images-xxlarge-secondary/kayisi-diyeti-nedir-08bc7fa3-4e7c-49a8-8b0d-74c70d14c5f0"];

function changeThePhotoNext() {
  const image = document.getElementById("img");
  image.src = resimler[currentIndex];
  currentIndex++;

  // Eğer son resme gelindiyse başa dön
  if (currentIndex === resimler.length) {
    currentIndex = 0;
  }
}

function changeThePhotoBefore() {
  const image = document.getElementById("img");
  image.src = resimler[currentIndex];
  currentIndex--;

  // Eğer son resme gelindiyse başa dön
  if (currentIndex === 0) {
    currentIndex = resimler.length;
  }
}