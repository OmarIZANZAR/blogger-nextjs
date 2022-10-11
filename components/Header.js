import React from 'react'
import styles from '../styles/Header.module.scss'

import Image from 'next/image'
import Logo from './Logo'
import readQuitely from '../public/header/read-quitely.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <Burger />
                <Logo color="black" />
            </div>

            <BackgroundText />
        </div>
    )
}

const Burger = () => {
    return (
        <div className={styles.burger}>
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
                src={readQuitely}
                height={50}
            />
        </div>
    )
}

export default Header
