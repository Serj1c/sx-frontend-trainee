import React, { useEffect, useState } from 'react'
import { fetchComment } from 'utils/functions'
import { CommentModel } from 'models/CommentModel'
import styles from './ListOfComments.module.css'

interface Props {
    commentId: CommentModel["id"]
}

export const ListOfComments:React.FunctionComponent<Props> = ({ commentId }): JSX.Element => {

    const [comment, setComment] = useState<CommentModel>()
    const [commentKid, setCommentKid] =  useState<CommentModel>()

    useEffect(() => {
        try {
            fetchComment(commentId).then(data => setComment(data))
        } catch (error) {
            console.log(error)
        }
        return function cleanup() {
            console.log("Cleaning up!")
        }
    }, [commentId])

    const handleClick = () => {
        if (comment.kids) {
            comment.kids.forEach((kid) => (
                fetchComment(kid).then(data => setCommentKid(data)).catch(err => console.log(err)
                )
            ))
        }
    }

    return (
        <div className={styles.root} onClick={handleClick}>
            {comment && 
                <div>
                    <span>{comment.by}:</span>
                    <p>{comment.text}</p>
                </div>
            }
            {commentKid && 
                <div className={styles.root_kid}>
                    <span>{commentKid.by}:</span>
                    <p>{commentKid.text}</p> 
                </div>}
        </div>
    )
}

