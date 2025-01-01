import React, { useEffect } from "react";
import styles from "./priviliges.module.css";

const PrivilegesPage = () => {
    useEffect(() => {
        // Body stilini ayarlama
        document.body.style.margin = "0";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.backgroundColor = "#f4f4f9";
        document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/beyzanurtaskesen/YazilimMuhendisligi_Projesi/refs/heads/main/ktbackground/KT_background.PNG)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.color = "#333";

        // Cleanup function to reset styles when component unmounts
        return () => {
            document.body.style.margin = "";
            document.body.style.fontFamily = "";
            document.body.style.backgroundColor = "";
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundRepeat = "";
            document.body.style.backgroundAttachment = "";
            document.body.style.color = "";
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ayrıcalıklarımız</h1>
            <div className={styles.content}>
                <p className={styles.text}>
                    Şirketimiz, güvenli, hızlı ve ekonomik lojistik çözümleriyle
                    müşterilerine ayrıcalıklı bir deneyim sunar. Her aşamada müşteri
                    isteklerini ve ihtiyaçlarını ön planda tutarak, yapıcı çözümler
                    sunarız. İthalat, ihracat ve gümrükleme süreçlerinde, müşterilerimizin
                    taleplerine en uygun ve verimli hizmeti sağlamak için sürekli olarak
                    çözümler geliştiririz. Ticaretin her aşamasında şeffaflık sağlayarak,
                    güvenilirliğimizi pekiştirir ve müşterilerimize sorunsuz bir ticaret
                    deneyimi sunarız.
                </p>
            </div>
        </div>
    );
};

export default PrivilegesPage;

