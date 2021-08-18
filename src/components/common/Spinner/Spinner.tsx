import React from 'react'
import spinner from './spinner.gif'

export const Spinner: React.FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <img src={spinner} alt="Loading"
            style={{ width: '200px', margin: '10px auto', display: 'block'}} />
        </div>
    )
};
