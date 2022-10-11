import React from 'react'
import styles from '../styles/Tag.module.scss'

const Tag = ({ text, size }) => {
    return (
        <div className={ `${styles.tagBox} ${ size === "lg" ? styles.lg : styles.sm }`}>
            <p>{text}</p>
        </div>
    )
}

export default Tag
