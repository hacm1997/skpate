import React from 'react'
import styles from './styles.module.css';


function hooka_type_card({ renderedHooka }: any) {
  return (
    <>
      {(renderedHooka) ? (
        <>
          <div className={styles.card}>
            <div className={styles.content_general}>
              <img src={renderedHooka.imgsrc} alt={renderedHooka.title} />
            </div>
          </div>
        </>
      ) :
        (<div>Wait...</div>)

      }
    </>

  )
}

export default hooka_type_card;