import type { NextPage } from 'next'
import styles from './styles.module.css';
import Layout from "../../business/container/general/layout/layou";
import HeaderHookah from "../../business/container/views/hookah/header_hookah/header_hookah";
import TipoHookah from "../../business/container/views/hookah/tipo_hookah/tipo_hookah";
import Variedad from "../../business/container/views/hookah/variedad/variedad";
import Beneficios from "../../business/container/views/hookah/beneficios/beneficios";
import Footer from "../../business/container/general/footer/footer";


const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <HeaderHookah />
                <TipoHookah />
                <Variedad />
                <div className={styles.footer}>
                    <Beneficios />
                    <div className={styles.humo}>
                        <img src="/images/humo-footer.png" alt="" />
                    </div>
                    <Footer />
                </div>
            </Layout>

        </>
    )
}

export default Home
