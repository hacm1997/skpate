import type { NextPage } from 'next';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from './styles.module.css';
import Layout from "../../business/container/general/layout/layou";
import EnVivo from "../../business/container/views/experiencia/enVivo/enVivo";
import RumbaTematica from "../../business/container/views/experiencia/rumbaTematica/rumbaTematica";
import AmbienteCrossover from "../../business/container/views/experiencia/ambienteCrossover/ambienteCrossover";
import Footer from "../../business/container/general/footer/footer";
import 'react-accessible-accordion/dist/fancy-example.css';
import useTranslation from "next-translate/useTranslation";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
  const {t, lang} = useTranslation('experiencia');

  const dev_item = t("Doubts", {}, {returnObjects: true})

  //console.log(t("Doubts.item.0.aswer.list.0"))
  return (
    <>
      <Layout>
        <EnVivo />
        <RumbaTematica />
        <AmbienteCrossover />
        <div className={styles.footer}>
          <div className={styles.general_1}>
            <div className={lang === "es" ? styles.title : styles.title2}>
              <h2>{t("experiencia:Doubts.title")}</h2>
            </div>
            <div className={styles.card_preguntas}>

              <Accordion className={styles.acordion} allowMultipleExpanded={false}>
                {
                  // @ts-ignore
                  dev_item.item?.map((questions:any, index:any) => (
                    <AccordionItem className={styles.item} key={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton className={styles.card}>
                          {t(`Doubts.item.${index}.question`)}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className={styles.parrafo}>
                          {t(`Doubts.item.${index}.aswer.content`)}</p>
                          {index === 0?
                              <div className={styles.parrafo}>
                                ❌ {t(`Doubts.item.0.aswer.list.0`)} <br/>
                                ❌ {t(`Doubts.item.0.aswer.list.1`)}
                              </div>
                              :
                              <div></div>
                          }

                      </AccordionItemPanel>
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </div>
          </div>
          <Footer />
        </div>

      </Layout>
    </>
  )
}

export default Home
