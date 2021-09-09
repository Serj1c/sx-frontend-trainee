import React, { useEffect, useState } from 'react'
import { fetchStory } from 'utils/functions'
import { StoryModel } from 'models/StoryModel'
import  styles from './Story.module.css'
import { useDispatch } from 'react-redux'
import { fetchStoryRedux } from 'redux/story/storyActions'

interface Props {
    storyid: StoryModel["id"]
}

export const Story: React.FunctionComponent<Props> = ({ storyid }): JSX.Element => {

    const [story, setStory] = useState<StoryModel>()

    const dispatch = useDispatch()

    /* TODO add cleanup function, or to fetch data through redux? */
    useEffect(() => {
        fetchStory(storyid)
        .then(data => setStory(data))
    }, [storyid])

    let date = new Date(story?.time * 1000)
    let dateUpdated = date.toUTCString()

    const handleClick = () => {
        dispatch(fetchStoryRedux(storyid))
    }

    return (
        <>
            {story &&
                <div className={styles.card} onClick={handleClick}>
                    <h3>{story.title}</h3>
                    <div>
                        <i>written by: {story.by}</i>
                        <br/>
                        <i>score: {story.score}</i>
                        <br/>
                        <i>published: {dateUpdated}</i>
                    </div>
                </div>
            }
        </>
    )
}