import styles from './styles.module.css';
import useTranslation from "next-translate/useTranslation";
export default function HeaderHookah() {
  const { t, lang } = useTranslation('hookah-sessions')
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>{t("Hero.title")}</h1>
          </div>
          <div className={styles.content_text}>
            <p>{t("Hero.content")}
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
