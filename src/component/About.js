import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
        <h1>About Page</h1>
        <p>This is the about page of our App</p>
        <p>And here we are learning about Router</p>
        <Link to="/">Go to Home page</Link>
        <ul>
        <li><Link to="/user/anil">Anil</Link></li> 
        <li><Link to="/user/peter">Peter</Link></li> 
        </ul> 
        </>
    );
}