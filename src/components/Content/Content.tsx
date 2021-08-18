import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'components/common'
import { News } from './components'
import { Button } from 'components/common'
import { fetchNewsIds } from 'utils/functions'
import styles from './Content.module.css'

export const Content: React.FunctionComponent = (): JSX.Element => {

    const [newsIds, setNewsIds] = useState<Array<number>>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        try {
            fetchNewsIds().then(data => setNewsIds(data))
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        try {
            const interval = setInterval(() => {
                fetchNewsIds().then(data => setNewsIds(data));
            }, 60000);
            return () => {
                clearInterval(interval)
            }
        } catch (error) {
            console.log(error)
        }
    }, [newsIds])

    const handleClick = (): void => {
        try {
            fetchNewsIds().then(data => setNewsIds(data));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.root}>
            <Button onClick={handleClick}>Update News</Button>
            <div className={styles.root_cards}>
                {loading ? <Spinner /> : newsIds.slice(0, 100).map(storyId => (
                    <Link to={`/item/${storyId}`} key={storyId}>
                        <News storyId={storyId}/>
                    </Link>
                ))} 
            </div>
        </div>
    )
}
