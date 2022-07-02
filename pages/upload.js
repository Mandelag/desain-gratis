import styles from '../styles/upload.module.scss';

const UploadPage = () => {
    return (
        <>
            <TopAppBar />
        </>
    )
}

const TopAppBar = () => {
    return (
    <>
    <div className={styles["mdc-touch-target-wrapper"]}>
        <button className={styles["mdc-icon-button"]}>
            <div className={styles["mdc-icon-button__ripple"]}></div>
            <span className={styles["mdc-icon-button__focus-ring"]}></span>
            {/* <span className={"material-symbols-outlined"}>favorite</span> */}
            <span className={"material-symbols-outlined " + styles["gg"]}>favorite</span>
        </button>
    </div>
    </>
    )
}


export default UploadPage;