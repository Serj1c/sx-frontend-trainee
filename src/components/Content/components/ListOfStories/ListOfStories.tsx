import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStoryIDs } from 'redux/storyid/storyIDActions'
import { Story } from './components'
import styles from './ListOfStories.module.css'

export const ListOfStories: React.FunctionComponent = (): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStoryIDs())
    }, [dispatch])

    useEffect(() => {
        try {
            const interval = setInterval(() => {
                dispatch(fetchStoryIDs())
            }, 60000);
            return () => {
                clearInterval(interval)
            }
        } catch (error) {
            console.log(error)
        }
    }, [dispatch])

    const storyIDs = useSelector((state: any /* TODO */) => state.storyID.storyids)

    return (
        <div className={styles.root_cards}>
            {storyIDs.slice(0, 100).map((storyid: number /* TODO */) => (
                <Link to={`/item/${storyid}`} key={storyid}>
                    <Story storyid={storyid}/>
                </Link>
            ))}
        </div>
    )
}