import { Link, useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();


    return(
        <>
        <h1>Home Page.</h1>
        <p>This is the home page of our App</p>
        <p>And here we are learning about Router
        <br/>
        use the useNavigate hook of react router dom to navigate on the click of a button.</p>
        
        <Link to="/about">Go to About page</Link>

        <button onClick={()=>navigate("/about")}>Go to About page</button>
        <button onClick={()=>navigate("/filter")}>Go to Filter page</button>

        </>
    );
}