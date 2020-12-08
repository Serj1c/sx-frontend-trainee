import { useEffect, useState } from 'react';
import { fetchComment } from '../../utils/functions';
import { Comment } from '../Comment/Comment';

export function Comments({ commentId }) {

    const [comments, setComments] = useState({});

    useEffect(() => {
        try {
            fetchComment(commentId).then(data => setComments(data));
        } catch (error) {
            console.log(error)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{marginTop: "1rem"}}>
            {Object.values(comments).filter(comment => comment.length > 20).map((comment) => (
                <Comment key={Math.random()} comment={comment}/>
            ))}
        </div>
    )
}

