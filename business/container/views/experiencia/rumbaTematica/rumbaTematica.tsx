import styles from './styles.module.css';
import state from '../,,/../../../../../stateService/state.json';
import useTranslation from 'next-translate/useTranslation';

export default function RumbaTematica() {
  const { t, lang } = useTranslation();

  return (
    <>
      <section className={styles.section}>
        <div className={(lang == "es") ? (styles.title) : (styles.titleEn)}>
          <h2>{t('experiencia:ThemeParties.title')}</h2>
        </div>
        <div className={styles.content}>
          <p>{t('experiencia:ThemeParties.content')}</p>
          <div className={styles.boton}>
            <a href={state.data.booking} target="_blank">{t("common:bookingButton")}</a>
          </div>
        </div>
      </section>
    </>
  )
}
