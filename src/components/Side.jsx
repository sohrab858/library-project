import React from 'react'

import styles from './SideCard.module.css'

function Side({data: {image,title}}) {
    return (
        <div>
        <div className={styles.card}>
         <img src={image} alt={title}/>
         <p>{title}</p> 
        </div>
        </div>
      )
    }
    

export default Side
 