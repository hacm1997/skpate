import styles from "./styles.module.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';
import { useEffect } from "react";
import state from "../../../../stateService/state.json";
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Layout({ children }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <>
      <a href={state.data.booking}
        title="Whatsapp"
        className={styles.float} target="_blank" rel="noreferrer">
        <img src="/images/whatsappIcon.png"></img>
      </a>
      <Navbar />
      {children}

    </>
  )
}