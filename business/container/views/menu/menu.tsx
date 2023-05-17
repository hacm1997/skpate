import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./styles.module.css";
import state from "../../../../stateService/state.json"

// import required modules
import { EffectCards } from "swiper";
import useTranslation from "next-translate/useTranslation";

export default function ListMenu() {
    const { t, lang } = useTranslation();
    const items = state.menuCards;
    const content = (
        items.map((item:any, index:any) => (
            <SwiperSlide key={index} className={styles.swiperSlide}><img src={item.imgSrc} /></SwiperSlide>
        ))
    )
    return (
        <>
            <div className={styles.general}>
                <div className={styles.grid}>
                    <div className={lang === "es" ? styles.title : styles.title2}>
                        <h2>{t("menu:title")}</h2>
                    </div>
                    <div className={styles.content_slider}>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className={styles.mySwiper}
                        >
                            {
                                content
                            }
                        </Swiper>
                    </div>
                </div>

            </div>


        </>
    );
}
