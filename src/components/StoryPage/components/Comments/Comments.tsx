import React, { useEffect, useState } from 'react'
import { fetchComment } from 'utils/functions'
//import { Comment } from './components'
import { CommentModel } from 'models/CommentModel'

interface Props {
    commentId: CommentModel["id"]
}

export const Comments:React.FunctionComponent<Props> = ({ commentId }): JSX.Element => {

    const [comment, setComment] = useState<CommentModel>()

    useEffect(() => {
        try {
            fetchComment(commentId).then(data => setComment(data))
        } catch (error) {
            console.log(error)
        }
    }, [commentId])

    return (
        <div style={{marginTop: "1rem"}}>
            {comment && comment.text}
        </div>
    )
}

