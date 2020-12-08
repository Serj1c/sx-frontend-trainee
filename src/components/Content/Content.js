import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner/Spinner';
import { News } from '../News/News';
import { Button } from '../common/Button/Button';
import { fetchNewsIds } from '../../utils/functions';
import './Content.css';

export function Content() {

    const [newsIds, setNewsIds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetchNewsIds().then(data => setNewsIds(data));
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        try {
            const interval = setInterval(() => {
                console.log('fetching...')
                fetchNewsIds().then(data => setNewsIds(data));
            }, 60000);
            return () => {
                clearInterval(interval)
            }
        } catch (error) {
            console.log(error)
        }
    }, [newsIds]);

    const handleClick = () => {
        try {
            fetchNewsIds().then(data => setNewsIds(data));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="root">
            <Button onClick={handleClick}>Update News</Button>
            <div className="root__cards">
                {loading ? <Spinner /> : newsIds.slice(0, 100).map(storyId => (
                    <Link to={`/item/${storyId}`}>
                        <News key={storyId} storyId={storyId}/>
                    </Link>
                ))} 
            </div>
        </div>
    )
}
