import styles from './styles.module.css';
import state from '../../../../stateService/state.json';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t, lang } = useTranslation('common')
  const contac_location = t('Footer.ContactUs.location')
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.general_2}>
          <div className={styles.item_footer}>
            <div className={styles.title}>
              <img src="/images/logo-skapate.png" alt="" />
              <h2>{t('Footer.AboutUs.title')}</h2>
            </div>
            <p>{t('Footer.AboutUs.content')}
            </p>
          </div>
          <div className={styles.item_footer}>
            <div className={styles.title}>
              <h2>{t('Footer.ContactUs.title')}</h2>
              <div className={styles.icon_infomacion}>
                <i className='bx bx-map'></i>
                <p className={styles.break_p}>{contac_location}
                </p>
              </div>
              <div className={styles.icon_infomacion}>
                <i className='bx bx-phone'></i>
                <p className={styles.break_p}>{t('Footer.ContactUs.phones')}</p>
              </div>
              <div className={styles.icon_infomacion}>
                <i className='bx bx-time'></i>
                <p className={styles.break_p}>{t('Footer.ContactUs.Schedule')}</p>
              </div>
            </div>
          </div>
          <div className={styles.item_footer}>
            <div className={styles.title}>
              <h2>{t('Footer.SocialMediaTitle')}</h2>
            </div>
            <div className={styles.icon_redes}>
              <a className={styles.single_icon} href={state.data.instagram} target="_blank"><i className='bx bxl-instagram'></i></a>
              <a className={styles.single_icon} href={state.data.facebook} target="_blank"><i className='bx bxl-facebook'></i></a>
              <a className={styles.single_icon} href={state.data.tiktok} target="_blank"><i className='bx bxl-tiktok'></i></a>
            </div>
          </div>
        </div>
        <div className={styles.kru_footer_container}>
          <div className="col-md-12 text-center">
            <br />
            <p className={styles.desarrollado}>
              {t('Footer.DevelopedBy')} {" "}
              <Link
                href="https://kru360.com/?utm_source=Pagina+web&utm_medium=Clic&utm_campaign=mfr&utm_id=mfr"
                passHref>
                <a className={styles.kru}
                  target="_blank">
                    KRU 🚀
                </a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
