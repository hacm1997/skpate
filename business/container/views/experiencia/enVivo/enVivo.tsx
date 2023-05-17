import styles from './styles.module.css';
import useTranslation from "next-translate/useTranslation";

export default function EnVivo() {
  const { t, lang } = useTranslation('experiencia');

  return (
    <>
      <section className={styles.section}>
        <div className={(lang == "es") ? (styles.title) : (styles.titleEn)}>
          <h2>
            {t('Live.title')}
          </h2>
        </div>

      </section>
    </>
  )
}
