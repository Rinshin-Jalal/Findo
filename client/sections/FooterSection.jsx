import styles from "../styles/Footer.module.scss";

const FooterSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="logo" />
                    <h1>
                        FINDO
                    </h1>
                </div>

            </div>
            <div className={styles.right}>
                <p>
                    <span>
                        Built by
                    </span>
                    Aarul and Rinshin <span> with 💙💙 </span>

                    <br />Hackathon (Code Battle Edition) 2022
                </p>
            </div>
        </div>
    )
}

export default FooterSection