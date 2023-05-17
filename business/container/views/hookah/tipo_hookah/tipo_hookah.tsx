import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './styles.module.css';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Virtual } from "swiper";
import { hooka_type } from "./Hooka_type_data";
import Hooka_type_card from './Hooka_type_card';
import useTranslation from "next-translate/useTranslation";

export default function TipoHookah() {
	const { t, lang } = useTranslation('hookah-sessions')
	const hookas = hooka_type;
	return (
		<>
			<section className={styles.section}>
				<div className={styles.general}>
					<div className={lang === "es" ? styles.title : styles.title2}>
						<h2>{t("Choose.title")}</h2>
					</div>
					<div className={styles.card_general}>

						<Swiper
							spaceBetween={30}
							slidesPerView={4}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							breakpoints={
								{
									320: {
										slidesPerView: 1,
									},
									768: {
										slidesPerView: 3,
									},
									1920: {
										slidesPerView: 3,
									}
								}
							}
							navigation={true}
							modules={[Autoplay, Pagination, Navigation, Virtual]}
							className={styles.mySwiper}
						>
							{hookas.map((hooka, index) => (
								<SwiperSlide virtualIndex={index} key={index}>
									<Hooka_type_card key={index} renderedHooka={hooka} />
								</SwiperSlide>
							))
							}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
