import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from 'components/common'
import styles from './StoryPage.module.css'
import { Comments } from './components'
import { useSelector } from 'react-redux'

export const StoryPage:React.FunctionComponent = (): JSX.Element => {

    const story = useSelector((state: any /* TODO */) => state.story.story)

    let date = new Date(story?.time * 1000)
    let dateUpdated = date.toUTCString()

    return (
        <div className={styles.container}>
            <Link to="/">
                <Button>Back to News</Button>
            </Link>
                {story &&
                <div>
                    <h1 className={styles.title}>{story.title}</h1>
                    <span className={styles.link}>
                        <i className="fas fa-angle-double-right"></i>
                        <a href={story.url} target="_blank" rel="noreferrer">Click me to read the full story</a>
                        <i className="fas fa-angle-double-left"></i>
                    </span>
                    <ul>
                        <li><i>written by: </i><strong>{story.by}</strong></li>
                        <li><i>published:</i> <strong>{dateUpdated}</strong></li>
                        <li><i>{story.descendants} comment{story.descendants === 1 ? " " : "s"}</i></li>
                    </ul>
                    {story.kids ? story.kids.map((commentId: number) => (
                        <Comments key={commentId} commentId={commentId}/>)) : <i>Nobody commented yet</i> }
                </div>
            }
        </div>
    )
}