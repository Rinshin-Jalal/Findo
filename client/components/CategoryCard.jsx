import React from 'react'
import styles from '../styles/Categories.module.scss'

const CategoryCard = ({category}) => {
  return (
    <div>
        <div className={styles.card}>
            <img width={70} height={70} src={category?.img} />
            <h1>{category.title}</h1>
        </div>
    </div>
  )
}

export default CategoryCard