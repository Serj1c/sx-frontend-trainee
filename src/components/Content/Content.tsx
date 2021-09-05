import React from 'react'
import { Button } from 'components/common'
import { ListOfStories } from './components'
import styles from './Content.module.css'
import { useDispatch } from 'react-redux'
import { fetchStoryIDs } from 'redux/storyid/storyIDActions'

export const Content: React.FunctionComponent = (): JSX.Element => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchStoryIDs())
    }

    return (
        <div className={styles.root}>
            <Button onClick={handleClick}>Update News</Button>
            <ListOfStories />
        </div>
    )
}
