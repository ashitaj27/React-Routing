import { Link, Outlet } from "react-router-dom";
export default function Contact(){
    return(
        <>
        <h1>Contact Page</h1>
        <p>This is the Contact page of our App</p>
        <p>And here we are learning about Nested Routing</p>
        <Link to="channel">channel</Link>
        <br/>
        <Link to="company">Company</Link>
        <br/>
        <Link to="other">Other</Link>
        <Outlet/>
         
        </>
    );
}