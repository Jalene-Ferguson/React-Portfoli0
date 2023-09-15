import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return(
        <div className='error'>
            <h2>Uh Oh!</h2>
            <p>Unexpected error found.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}