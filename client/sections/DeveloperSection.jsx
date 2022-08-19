import styles from "../styles/Developer.module.scss"


const DeveloperSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.left}>
                    <p className={styles.question}>
                        Are you a developer ?
                    </p>
                    <h1>
                        WORK WITH THE BEST
                    </h1>
                    <h4>
                        Work with clients who you are excited to work with. 
                    </h4>
                    <p className={styles.profilequestion}>Don’t have a profile? Make One!</p>
                    <a className={styles.make_profile}>
                        Make Profile
                    </a>
                </div>
                <div className={styles.right}>
                    <img src="/images/developer.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default DeveloperSection