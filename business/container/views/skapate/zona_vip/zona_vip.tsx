import styles from './styles.module.css';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import state from '../../../../../stateService/state.json';
import useTranslation from "next-translate/useTranslation";


export default function ZonaVip() {
    const { t, lang } = useTranslation();
    const vip = t("home:Vip.title").split(" ");
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general_1}>
                    <div className={styles.content_general}>
                        <div className={styles.title}>
                            <ParallaxProvider>
                            <Parallax  speed={20} translateX={[-100,20]} translateY={[0,0]} >
                            <h2>{vip[0]}<span> {vip[1]}</span></h2>
                            </Parallax>
                            </ParallaxProvider>
                        </div>
                        <div className={styles.content}>
                            <h3>{t("home:Vip.subtitle")}</h3>
                            <p>{t("home:Vip.content")}</p>
                            <a href={state.data.booking} target="_blank">{t("common:bookingButton")}</a>
                        </div>
                    </div>
                </div>

                <div className={styles.general_2}>
                    <div className={styles.card}>
                        <img src="/images/zona-vip-skapate.jpg" alt="Zona VIP"/>
                    </div>
                </div>

            </section>
        </>
    )
}
