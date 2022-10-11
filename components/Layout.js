import React from 'react';
import styles from '../styles/Layout.module.scss';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
