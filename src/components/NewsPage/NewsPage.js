import { fetchNews } from '../../functions/API';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '../common/Button/Button';
import Spinner from '../common/Spinner/Spinner';
import './NewsPage.css';

export function NewsPage() {

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState({});

    const params = useParams();

    useEffect(() => {
        fetchNews(params.id).then(data => setNews(data));
        setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <Link to="/">
                <Button>Back to News</Button>
            </Link>
            {loading ? <Spinner /> : 
                <div>
                    <h1 className="title">{news.title}</h1>
                    <ul>
                        <li><a href={news.url} blank>Click me to read a full story</a></li>
                        <li>written by: {news.by}</li>
                        <li>Comments count: {news.descendants}</li>
                        <li>{news.kids ? news.kids : "Nobody commented yet"}</li>
                    </ul>
                </div>
            }
            
        </div>
    )
}