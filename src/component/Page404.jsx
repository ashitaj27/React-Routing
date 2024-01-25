import { Link } from "react-router-dom";

export default function Page404(){
    return(
        <>
        <h1>404 page</h1>
        <p>This URL is not present</p>
        <Link to="/">GO to Home page</Link>
        </>

    );
}