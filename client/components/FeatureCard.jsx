import React from 'react'
import styles from "../styles/FeatureSection.module.scss"

const FeatureCard = ({feature}) => {
  return (
    <div className={styles.card}>
      <img src={feature?.img} alt="" />
      <div className={styles.text}>
        <h1>{feature?.title}</h1>
        <p>{feature?.desc}</p>
      </div>
    </div>
  )
}

export default FeatureCard