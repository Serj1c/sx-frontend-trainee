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
        
        fetchNewsIds().then(data => setNewsIds(data));
        setLoading(false);
        
        /* setInterval(() => {
            fetchNewsIds().then(data => setNewsIds(data));
        }, 30000); */

    }, []);

    const handleClick = () => {
        fetchNewsIds().then(data => setNewsIds(data));
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
