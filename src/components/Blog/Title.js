import React from "react"
import * as styles from "./Title.module.css"

const Title = ({ title }) => {
    return <h4 className={styles.line}>{title}</h4>
}

export default Title
