import styles from './styles.module.css';
import { variety_data } from './variety_data';
import { useState } from 'react';
import useTranslation from "next-translate/useTranslation";

export default function Variedad() {
  const [flavorChoice, setFlavorChoice] = useState<any>({ flavors: [] });
  const { t, lang } = useTranslation()
  console.log(flavorChoice.flavors);
  const bookingFlavorsURL = `https://api.whatsapp.com/send?phone=573004115807&text=Hoy%20tengo%20noche%20de%20skapate%2C%20y%20me%20gustar%C3%ADa%20reservar%20la%20esencia%20de%20${flavorChoice.flavors}%20para%20vivir%20la%20mejor%20rumba.`
  const dev_item = t("hookah-sessions:Essences", {}, {returnObjects: true})
  //console.log(dev_item.list)
  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    const { flavors } = flavorChoice;

    if (checked) {
      setFlavorChoice({
        flavors: [...flavors, value]
      })
    }else{
      setFlavorChoice({
        flavors: flavors.filter((e: any) => e !== value)
      })
    }

  }

  return (
    <>
      <section className={styles.section}>

        <div className={styles.general}>
          <div className={styles.humo}>
            <img src="/images/variedad/humo-hookah.png" alt="" />
          </div>
          <div className={styles.content}>
            <div className={lang === "es" ? styles.title : styles.title2}>
              <h2>{t("hookah-sessions:Essences.title")}</h2>
            </div>
            <div className={styles.contentList}>
              <p>
                {t("hookah-sessions:Essences.content")}
              </p>

              <form className={styles.flavors}>

                {// @ts-ignore
                  dev_item.list?.map((data, index) => (
                  <div className="form-check m-3" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="Flavors"
                      value={data.flavor}
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label
                      className={"form-check-label " + styles.label}
                      htmlFor="flexCheckDefault"
                    >
                      {data.flavor}
                    </label>
                  </div>
                ))}
              </form>
              <a href={bookingFlavorsURL} target="_blank">{t("common:bookingButton")}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
