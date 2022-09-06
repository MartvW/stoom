import { appPath } from "@routes/app";
import { Link } from 'react-router-dom';

type Props = {
    error: number;
    errorInfo?: string;
};

/**
 * The error page
 * @param {number} error The error code
 * @param {string} errorInfo The error info
 * @returns {JSX.Element} The error page
 */
const ErrorPage = ({ error, errorInfo }: Props) => (
    <div className='flex justify-center items-center w-full h-screen bg-primary'>
        <div className='w-1/2  rounded-lg p-2 flex items-center justify-center flex-col bg-secondary'>
            <h1 className='text-primary text-5xl m-5'>{error}</h1>
            <h5 className='text-lg text-secondary'>{errorInfo}</h5>
            <Link to={appPath.home} className='m-5 rounded bg-blue-500 hover:bg-blue-700 text-white p-2'>
                All games
            </Link>
        </div>
    </div>
);

export default ErrorPage;