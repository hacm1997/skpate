import styles from './styles.module.css';
import state from '../,,/../../../../../stateService/state.json';
import useTranslation from 'next-translate/useTranslation';

export default function AmbienteCrossover() {
  const {t, lang} = useTranslation();

  return (
    <>
      <section className={styles.section}>
        <div className={styles.multimidia}>
          <img src="/images/croos.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={(lang == "es") ? (styles.title) : (styles.titleEn)}>
            <h2>{t('experiencia:Crossover.title')}</h2>
          </div>
          <p>
             {t('experiencia:Crossover.content')}
          </p>
          <a href={state.data.booking} target="_blank">{t("common:bookingButton")}</a>
        </div>
      </section>
    </>
  )
}
