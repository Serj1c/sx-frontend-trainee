import React, { useEffect, useState } from 'react'
import { fetchComment } from 'utils/functions'
import { Comment } from './components'
import { CommentModel } from 'models/CommentModel'

interface Props {
    commentId: CommentModel["id"]
}

export const Comments:React.FunctionComponent<Props> = ({ commentId }): JSX.Element => {

    const [comments, setComments] = useState<Array<CommentModel>>()

    useEffect(() => {
        try {
            fetchComment(commentId).then(data => setComments(data))
        } catch (error) {
            console.log(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{marginTop: "1rem"}}>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    )
}

