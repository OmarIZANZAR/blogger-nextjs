import React from 'react'
import styles from '../styles/Footer.module.scss'

import Image from 'next/image'
import Logo from './Logo'
import happyReading from '../public/footer/happy-reading.svg'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <Star />
                <Logo color="white" />
            </div>

            <BackgroundText />
        </div>
    )
}

const Star = () => {
    return (
        <div className={styles.star}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

const BackgroundText = () => {
    return (
        <div className={styles.backgroundText}> 
            <Image
                src={happyReading}
                height={35}
            />
        </div>
    )
}

export default Footer
