import { Link } from "react-router-dom";


const ErrorPage = () => {

    return (
        <div>
            <Link to={-1}><button  className='px-6 bg-red-500 text-white'>Go back</button></Link>
        </div>
    );
};

export default ErrorPage;