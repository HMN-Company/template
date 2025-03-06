import React from "react";
import styles from "./ProductsComponent.module.css";

const cards = [
    { id: 1, title: "WEBSITE BÁN HÀNG", image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1223/posts/26768/image/Journal.jpg", link: "https://pham-van-man.github.io/template/index.html" },
    { id: 2, title: "WEBSITE NHÀ HÀNG", image: "https://blog.dktcdn.net/files/theme7.png", link: "#" },
    { id: 3, title: "WEBSITE QUÁN ĂN", image: "https://mona-media.com/wp-content/uploads/2017/12/1a-2.png", link: "https://pham-van-man.github.io/template-cater-serv/" },
    { id: 4, title: "WEBSITE BẤT ĐỘNG SẢN", image: "https://blog.dktcdn.net/files/mau-website-bat-dong-san-dep-1.png", link: "#" },
    { id: 5, title: "WEBSITE SPA/SALON", image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1223/posts/29151/image/Holistic%20Center.jpg", link: "#" },
    { id: 6, title: "WEBSITE GIÁO DỤC", image: "https://daksystem.net/wp-content/uploads/2020/04/theme-wordpress-khoa-hoc-nhac-cu-300x557.jpg", link: "#" },
    { id: 7, title: "WEBSITE DƯỢC-Y TẾ", image: "https://adsmo.vn/wp-content/uploads/2020/04/mau-website-dnsk41-01.jpg", link: "#" },
    { id: 8, title: "WEBSITE XÂY DỰNG", image: "https://southteam.vn/wp-content/uploads/2020/06/edile1-e1593146162161-686x1024.png", link: "#" },
];

const ProductsComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <h3 className={styles.title}>{card.title}</h3>
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                            <img src={card.image} alt={card.title} className={styles.image} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsComponent;
