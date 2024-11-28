import React from "react";
import styles from "./culture.module.css";

const CulturePage = () => {
  return (
    <div className={styles.cultureContainer}>
      <header className={styles.cultureHeader}>
        <h1>Kültürümüz</h1>
        <p>
          Global ve Yerel Değerler Arasında Denge. Çalışma kültürümüz, yenilikçi,
          girişimci ve sorumluluk sahibi bir anlayışla şekillenmektedir. Hem yerel
          hem de uluslararası pazarlarda güçlü iş ilişkileri kurarak karşılıklı güven
          ve saygıyı ön planda tutuyoruz. Çalışanlarımızla ve iş ortaklarımızla sürekli
          bir öğrenme ve gelişim süreci içindeyiz, global pazarda başarılı olmak için
          farklı kültürleri anlamaya ve çeşitliliğe değer veriyoruz.
        </p>
      </header>
      <main className={styles.cultureContent}>
        {/* Görseli ekliyoruz */}
        <div className={styles.cultureImageWrapper}>
          <img
            src="company_culture.png" // Görselin yolu (public/images dizininde yer almalı)
            alt="Şirket Kültürü"
            className={styles.cultureImage}
          />
        </div>

        {/* Yazı kısmı */}
        <div className={styles.cultureText}>
          <p>
            Kültürümüz, tüm faaliyetlerimizin temelini oluşturan değerler ve ilkelerle
            şekillenmiştir. Bu değerler, şirketimizin küresel ve yerel düzeydeki
            başarılarının yapı taşlarıdır. Çalışanlarımızın ve iş ortaklarımızın
            birbirine duyduğu güven, karşılıklı saygı ve işbirliği kültürümüzün ayrılmaz
            bir parçasıdır. Bu kültür, hem iş yerinde hem de dış dünyada uzun vadeli
            başarıyı getiren en önemli faktörlerden biridir.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CulturePage;
