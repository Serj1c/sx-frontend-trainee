import React, { useState, useEffect } from 'react'
import { Spinner } from 'components/common'
import { fetchNews } from 'utils/functions'
import styles from './News.module.css'
import { StoryModel } from 'models/StoryModel'

interface Props {
    storyId: StoryModel["id"]
}

export const News: React.FunctionComponent<Props> = ({ storyId }): JSX.Element => {

    const [news, setNews] = useState<StoryModel>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() =>{
        fetchNews(storyId).then(data => setNews(data))
        setLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let date = new Date(news?.time * 1000)
    let dateUpdated = date.toUTCString()

    return (
        <div className={styles.card}>
            {loading ? <Spinner /> : 
                <>
                    <h3>{news?.title}</h3>
                    <div>
                        <i>written by: {news?.by}</i>
                        <br/>
                        <i>score: {news?.score}</i>
                        <br/>
                        <i>published: {dateUpdated}</i>
                    </div>
                </>
            }
        </div>
    )
}