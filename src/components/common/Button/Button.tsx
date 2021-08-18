import React from 'react'
import styles from './Button.module.css'


export const Button: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <button className={styles.button} {...props}>{children}</button>
    )
}

