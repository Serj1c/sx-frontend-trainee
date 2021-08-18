import React from 'react'
import styles from './Navbar.module.css'

export const Navbar: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <h2>News from HackerNews</h2>
            <p>Nothing to do in a lockdown? Check this out!</p>
        </div>
    )
}
