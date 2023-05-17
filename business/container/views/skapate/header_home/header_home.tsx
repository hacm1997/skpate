import styles from './styles.module.css';
import useTranslation from "next-translate/useTranslation";

export default function HeaderHome({ children }: any) {
  const { t, lang } = useTranslation('home');

  return (
    <>
      <div className={styles.general}>
        <div className={styles.planta}>
          <div className={lang === "es" ? styles.content : styles.content2}>
            <h1 className="animate__animated animate__flash"><span>{t('Environments.title')}</span></h1>
          </div>
        </div>
        <div className={styles.card_general}>
          <div className={'animate__animated animate__slideInUp ' + styles.card}>

            <img src="/images/planta-1-skapate.jpg" alt="" />
            <div className={styles.content}>
              <h2>{t("Environments.High.title")}</h2>
              <p>{t("Environments.High.content")}</p>
            </div>
          </div>
          <div className={'animate__animated animate__slideInUp ' + styles.card}>
            <img src="/images/planta-2-skapate.jpg" alt="" />
            <div className={styles.content}>
              <h2>{t("Environments.Dembow.title")}</h2>
              <p>{t("Environments.Dembow.content")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
