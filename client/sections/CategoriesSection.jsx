import React from 'react'
import styles from '../styles/Categories.module.scss'
import CategoryCard from '../components/CategoryCard'

const categoriesData = [
  {
    img: '/images/categories/gamedev.png',
    title: 'Game Developer',
  },
  {
    img: '/images/categories/websitedev.png',
    title: 'Website Developer',
  },
  {
    img: '/images/categories/appdev.png',
    title: 'App Developer',
  },
  {
    img: '/images/categories/frontenddev.png',
    title: 'Frontend Developer',
  },
  {
    img: '/images/categories/backenddev.png',
    title: 'Backend Developer',
  },
  {
    img: '/images/categories/fullstackdev.png',
    title: 'FullStack Developer',
  },
  {
    img: '/images/categories/ecommercedev.png',
    title: 'E-Commerce Developer',
  },
  {
    img: '/images/categories/cybersecuritydev.png',
    title: 'Cyber-Security Developer',
  },
  {
    img: '/images/categories/blockchaindev.png',
    title: 'Blockchain Developer',
  },
  {
    img: '/images/categories/dataanalyticsdev.png',
    title: 'Data-Analytics Developer',
  },
  {
    img: '/images/categories/aidev.png',
    title: 'Chatbot/AI Developer',
  },
  {
    img: '/images/categories/desktopappdev.png',
    title: 'Desktop App Developer',
  },
]

const CategoriesSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find the talent you want! -</h1>
        <div className={styles.cardsContainer}>
          {
            categoriesData.map((category, id) => (
              <div key={id}>
                <CategoryCard category={category} />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default CategoriesSection