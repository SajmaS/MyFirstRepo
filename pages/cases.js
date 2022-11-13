import BGI from "../src/components/BGI"
import styles from '../styles/Home.module.css'


const Cases = () => {
    return (
            <div className={styles.backgroundimage}>
            <BGI/>
          </div>
    )
}

export const getStaticProps = (context) => {
    return { 
        props: {},
        revalidate: 10 
    }
}

export default Cases;