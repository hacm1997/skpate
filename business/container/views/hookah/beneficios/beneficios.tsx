import React, { useState } from 'react';
import styles from './styles.module.css';
import state from '../../../../../stateService/state.json';
import useTranslation from "next-translate/useTranslation";

export default function Beneficios() {
  const { t, lang } = useTranslation();

  return (
    <>
      <section className={styles.section}>
        <div>
          <div className={lang === "es" ? styles.title : styles.title2}>
            <h2>{t("hookah-sessions:Profits.title")}</h2>
          </div>
          <div className={styles.content}>
            <p>
              {t("hookah-sessions:Profits.content")}
            </p>
            <a href={state.data.booking} target="_blank">{t("common:bookingButton")}</a>
          </div>
        </div>
        <div className={styles.card_general}>
          <img src="/images/beneficios-img.png" alt="beneficios_img" />
        </div>
      </section>
    </>
  )
}
