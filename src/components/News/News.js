import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner/Spinner';
import { fetchNews } from '../../functions/API';
import './News.css';

export function News({ storyId }) {

    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetchNews(storyId).then(data => setNews(data));
        setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let date = new Date(news.time * 1000);
    let dateUpdated = date.toGMTString();

    return (
        <div className="card">
            {loading ? <Spinner /> : 
                <>
                    <h3>{news.title}</h3>
                    <div>
                        <i>written by: {news.by}</i>
                        <br/>
                        <i>score: {news.score}</i>
                        <br/>
                        <i>published: {dateUpdated}</i>
                    </div>
                </>
            }
        </div>
    )
}