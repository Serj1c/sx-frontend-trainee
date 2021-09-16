import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Button } from 'components/common'
import styles from './StoryPage.module.css'
import { ListOfComments } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStoryRedux } from 'redux/story/storyActions'

export const StoryPage:React.FunctionComponent = (): JSX.Element => {

    const story = useSelector((state: any /* TODO */) => state.story.story)
    const dispatch = useDispatch()

    let date = new Date(story?.time * 1000)
    let dateUpdated = date.toUTCString()

    useEffect(() => {
        try {
            const interval = setInterval(() => {
                dispatch(fetchStoryRedux(story.id))
            }, 60000);
            return () => {
                clearInterval(interval)
            }
        } catch (error) {
            console.log(error)
        }
    }, [dispatch, story?.id])

    /* TODO handle update of comments the other way */
    const handleClick = () => {
        dispatch(fetchStoryRedux(story.id))
    }

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.link}>
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
                <ul className={styles.infoblock}>
                    <li><i>written by: </i><strong>{story.by}</strong></li>
                    <li><i>published:</i> <strong>{dateUpdated}</strong></li>
                    <li><i>{story.descendants} comment{story.descendants === 1 ? " " : "s"}</i></li>
                </ul>
                <Button onClick={handleClick}>Get comments</Button>
                {story.kids ? story.kids.map((commentId: number) => (
                    <ListOfComments key={commentId} commentId={commentId}/>)) : <i>Nobody commented yet</i> }
            </div>
            }
        </div>
    )
}