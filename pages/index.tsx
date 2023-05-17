import type { NextPage } from 'next'
import HeaderHome from "../business/container/views/skapate/header_home/header_home";
import ZonaVip from "../business/container/views/skapate/zona_vip/zona_vip";
import Layout from "../business/container/general/layout/layou";
import SaceaTuSed from "../business/container/views/skapate/sacea_tu_sed/sacea_tu_sed";
import styles from "./styles.module.css";
import Footer from "../business/container/general/footer/footer";
import state from "../stateService/state.json";
import useTranslation from "next-translate/useTranslation";


const Home: NextPage = () => {
  const { t, lang } = useTranslation();
  return (
    <>
      <Layout>
        <HeaderHome />
        <ZonaVip />
        <SaceaTuSed />

        <div className={styles.footer}>
          <div className={styles.general_1}>
            <div className={lang === "es" ? styles.title : styles.title2}>
              <h2>{t("home:Cover.title")}</h2>
            </div>
            <div className={styles.content}>
              <h3>{t("home:Cover.subtitle")}</h3>
              <p>{t("home:Cover.content")}</p>
              <a href={state.data.booking} target="_blank">{t("common:bookingButton")}</a>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  )
}

export default Home
