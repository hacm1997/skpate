import styles from './styles.module.css';
import state from '../../../../../stateService/state.json';
import useTranslation from "next-translate/useTranslation";

export default function SaceaTuSed() {
    const { t, lang } = useTranslation();
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={lang === "es" ? styles.title : styles.title2}>
                        <h2>{t("home:Bar.title")}</h2>
                    </div>
                    <div className={styles.card_general}>
                        <div className={styles.card}>
                            <img src="/images/skapate-espacio.jpg" alt="espacio_skapate"/>
                        </div>
                        <div className={styles.card}>
                            <img src="/images/planta-1-skapate.jpg" alt="planta_1_skapate"/>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h3>{t("home:Bar.subtitle")}</h3>
                        <p>{t("home:Bar.content")} </p>
                        <a href={state.data.booking} target="_blank">{t("common:bookingButton")}</a>
                    </div>
                </div>
            </section>
        </>
    )
}
