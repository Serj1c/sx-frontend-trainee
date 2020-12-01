import spinner from './spinner.gif';

export default function Spinner() {
    return (
        <div>
            <img src={spinner} alt="Loading"
            style={{ width: '200px', margin: '10px auto', display: 'block'}} />
        </div>
    )
};
