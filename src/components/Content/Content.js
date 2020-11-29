import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import News from '../News/News';
import { fetchNewsIds } from '../../functions/API';
import './Content.css';

export default function Content() {

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
            <button onClick={handleClick} type="button" className="root__button">Update News</button>
            <div className="root__cards">
                {loading ? <Spinner /> : newsIds.slice(0, 100).map(storyId => (
                    <Link to="/item/:id">
                        <News key={storyId} storyId={storyId}/>
                    </Link>
                ))} 
            </div>
        </div>
    )
}
