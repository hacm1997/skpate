import styles from './styles.module.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Preguntas({ pregunta, respuesta, index }: any) {


  return (
    <>
      {(pregunta && respuesta && index) ?
        (
          <div key={index} className={styles.general_1}>
            <Accordion allowMultipleExpanded={false}>
              <AccordionItem className={styles.iten}>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.card}>
                    {pregunta}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className={styles.parrafo}>{respuesta}</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        )
        :
        (
          <div>
            <p>
              <div className="Wait"></div>
            </p>
          </div>
        )
      }
    </>
  )
}