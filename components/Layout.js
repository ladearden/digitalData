import Sidebar from "./Sidebar";
import styles from '../styles/Home.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.content}>
            <Sidebar></Sidebar>
            {children}
        </div>
    )
}