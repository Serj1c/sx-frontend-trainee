import React from 'react'
import styles from './Comment.module.css'
import { CommentModel } from 'models/CommentModel'

interface Props {
    comment: CommentModel
}

export const Comment: React.FunctionComponent<Props> = ({ comment }): JSX.Element => {
    return (
            <p className={styles.text}>{comment.text}</p>
    )
}
