import { fetchNews } from '../../utils/functions';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button/Button';
import Spinner from '../common/Spinner/Spinner';
import './NewsPage.css';
import { Comments } from '../Comments/Comments';

export function NewsPage() {

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState({});

    const params = useParams();

    useEffect(() => {
        fetchNews(params.id).then(data => setNews(data));
        setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let date = new Date(news.time * 1000);
    let dateUpdated = date.toGMTString();

    return (
            <div className="container">
                <Link to="/">
                    <Button>Back to News</Button>
                </Link>
                {loading ? <Spinner /> : 
                    <div>
                        <h1 className="title">{news.title}</h1>
                        <span className="link"><i className="fas fa-angle-double-right"></i><a href={news.url} target="_blank" rel="noreferrer">Click me to read a full story</a><i class="fas fa-angle-double-left"></i></span>
                        <ul className="info-block">
                            <li><i>written by: </i><strong>{news.by}</strong></li>
                            <li><i>published:</i> <strong>{dateUpdated}</strong></li>
                            <li><i>{news.descendants} comment{news.descendants === 1 ? " " : "s"}</i></li>
                        </ul>
                        {news.kids ? news.kids.map(commentId => (
                            <Comments key={commentId} commentId={commentId}/>)) : <i>Nobody commented yet</i> }
                    </div>
                }
            </div>
    )
}