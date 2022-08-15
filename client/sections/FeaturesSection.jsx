import React from 'react'
import FeatureCard from '../components/FeatureCard'
import styles from "../styles/FeatureSection.module.scss"

const featuresData = [
    {
        img: '/images/feature1.png',
        title: 'Quality work promise',
        desc: 'Get the best quality work for the most reasonable prices online.'
    },
    {
        img: '/images/feature2.png',
        title: 'Get which suites your project',
        desc: 'Wide-ranging variety of developer from frontend to proffessional game developer.'
    },
    {
        img: '/images/feature3.png',
        title: 'Anywhere, Anytime',
        desc: 'Get developers from around the world, any time zone.'
    }
]

const FeaturesSection = () => {
  return (
    <div className={styles.container}>
        {featuresData.map((feature, id) => (
            <FeatureCard key={id} feature={feature} />
        ))}
    </div>
  )
}

export default FeaturesSection