import styles from './styles.module.css';
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import state from '../../../../stateService/state.json';
import useTranslation from 'next-translate/useTranslation'

function Navbar() {
  const booking = state.data.booking;
  const router = useRouter();
  const { t, lang } = useTranslation('common')
  const [language, setLang] = useState('');

  const skapateBtnStyle = {
    color: router.asPath === "/" ? '#e5c265' : 'white',
    fontSize: "18px",
    textDecoration: "none",
  }

  const experienceBtnStyle = {
    color: router.asPath === "/experiencia" || router.asPath === "/especiales" ? '#e5c265' : 'white',
    fontSize: "18px",
    textDecoration: "none"
  }

  const hookaSessionsBtnStyle = {
    color: router.asPath === "/hookah-sessions" ? '#e5c265' : 'white',
    fontSize: "18px",
    textDecoration: "none"
  }

  const menuBtnStyle = {
    color: router.asPath === "/menu" ? '#e5c265' : 'white',
    fontSize: "18px",
    textDecoration: "none"
  }

  const [menuTwo, setMenuTwo] = useState(styles.menu);
  const [iconTwo, setIconTwo] = useState('bx bx-menu');

  const handleMenu = () => {
    let menu = styles.menu;
    let icon = 'bx bx-menu';
    menu !== menuTwo ? setMenuTwo(menu) : setMenuTwo(styles.menuActive);
    icon !== iconTwo ? setIconTwo(icon) : setIconTwo('bx bx-x '+ styles.closeFixed);
  }

  const changeLanguageEnglish = (e:any) => {
    window.location.replace('/en');
  }
  const changeLanguageSpanish = (e:any) => {
    window.location.replace('/es');
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/images/logo-skapate.png" alt="Logo Skapate" />
        </div>

        <div onClick={handleMenu} className={styles.botonMovil}>
          <i className={iconTwo}></i>
        </div>
        
        <div className={menuTwo +" "+styles.menu_content}>
          <ul>
            <Link href="/">
              <li><a style={skapateBtnStyle} href="">{t('Header.items', { count: 0 })}</a></li>
            </Link>
            <Link href="/experiencia">
              <li><a style={experienceBtnStyle} href="">{t('Header.items', { count: 1 })}</a></li>
            </Link>
            <Link href="/hookah-sessions">
              <li><a style={hookaSessionsBtnStyle} href="">{t('Header.items', { count: 2 })}</a></li>
            </Link>
            <Link href="/menu">
              <li><a style={menuBtnStyle} href="">{t('Header.items', { count: 3 })}</a></li>
            </Link>
          </ul>
          
          <div className={styles.boton}>
            <a className={styles.btn} href={booking} target="_blank">{t('bookingButton')}</a>
          </div>
          <div className={styles.languages}>
          <label >
            <img onClick={changeLanguageEnglish} width="28px" src='/images/language/english2.png' />
            <a>
            <img onClick={changeLanguageSpanish} width="30px" src='/images/language/spanish2.png' />
            </a>
          </label>
        </div>
        </div>
        
      </nav>
    </>
  )
}


export default Navbar;
