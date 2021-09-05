import { fetchNews } from 'utils/functions'
import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Button } from 'components/common'
import styles from './StoryPage.module.css'
import { Comments } from './components'
import { StoryModel } from 'models/StoryModel'

export const StoryPage:React.FunctionComponent = (): JSX.Element => {

    const [loading, setLoading] = useState<boolean>(true)
    const [story, setStory] = useState<StoryModel>()

    const params: any = useParams()

    useEffect(() => {
        try {
            fetchNews(params.id).then(data => setStory(data));
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    let date = new Date(story?.time * 1000);
    let dateUpdated = date.toUTCString();

    return (
            <div className={styles.container}>
                <Link to="/">
                    <Button>Back to News</Button>
                </Link>
                {!loading && story &&
                    <div>
                        <h1 className={styles.title}>{story.title}</h1>
                        <span className={styles.link}>
                            <i className="fas fa-angle-double-right"></i>
                            <a href={story.url} target="_blank" rel="noreferrer">Click me to read a full story</a>
                            <i className="fas fa-angle-double-left"></i>
                        </span>
                        <ul>
                            <li><i>written by: </i><strong>{story.by}</strong></li>
                            <li><i>published:</i> <strong>{dateUpdated}</strong></li>
                            <li><i>{story.descendants} comment{story.descendants === 1 ? " " : "s"}</i></li>
                        </ul>
                        {story.kids ? story.kids.map((commentId) => (
                            <Comments key={commentId} commentId={commentId}/>)) : <i>Nobody commented yet</i> }
                    </div>
                }
            </div>
    )
}