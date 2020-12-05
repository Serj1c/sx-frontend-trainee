import { useEffect, useState } from 'react';
import { fetchComment } from '../../utils/functions';
import { Comment } from '../Comment/Comment';

export function Comments({ commentId }) {

    const [comments, setComments] = useState({});

    useEffect(() => {
        fetchComment(commentId).then(data => setComments(data));
        //console.log(Object.values(comments).filter(comment => comment.length > 10))

        /* setInterval(() => {
            fetchComment(commentId).then(data => setComments(data));
        }, 30000); */

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{margin: "2rem"}}>
            {Object.values(comments).filter(comment => comment.length > 20).map((comment) => (
                <Comment comment={comment}/>
            ))}
        </div>
    )
}

