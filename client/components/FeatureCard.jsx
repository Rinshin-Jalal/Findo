import React from 'react'
import styles from "../styles/FeatureSection.module.scss"

const FeatureCard = ({feature}) => {
  return (
    <div className={styles.card}>
      <img src={feature?.img} alt="" />
      <h1>{feature?.title}</h1>
      <p>{feature?.desc}</p>
    </div>
  )
}

export default FeatureCard