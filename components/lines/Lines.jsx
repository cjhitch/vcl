import styles from './Lines.module.scss';

const Lines = () => {

    return (
        <div className={styles.set_line_wrapper}>
            <div className={styles.set_line_area}>
                <div className={styles.line_inner}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    )
}

export default Lines;