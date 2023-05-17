import {NextPage} from "next";
import Layout from "../../business/container/general/layout/layou";
import ListMenu from "../../business/container/views/menu/menu";
import Footer from "../../business/container/general/footer/footer";
import styles from "../styles.module.css";
import state from "../../stateService/state.json";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
    const { t, lang } = useTranslation('experiencia');
    const Crossover = t('Crossover')
    return (
        <Layout>
            <ListMenu />
            <div className={styles.footer}>

                <Footer />
            </div>
        </Layout>
    )
}
export default Home
