import styles from "./Button.module.scss"

export default function Button({
    title = "",
    type = "default"
}) {
    return (
        <button className={`${styles.wrapper} ${styles[type]}`}>
            {title}
        </button>
    )
}