import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <ul className="navbar">
                <li><NavLink
                style={({isActive}) =>{return {backgroundColor : isActive ? "black" : null}}}
                 className="navbar-link" to="/" >Home</NavLink></li>
                <li><NavLink
                style={({isActive}) =>{return {backgroundColor : isActive ? "black" : null}}}
                 className="navbar-link" to="/about" >About</NavLink></li>  
                <li><NavLink 
                style={({isActive}) =>{return {backgroundColor : isActive ? "black" : null}}}
                 className="navbar-link" to="/contact">Contact</NavLink></li> 
                <li><NavLink 
                style={({isActive}) =>{return {backgroundColor : isActive ? "black" : null}}}
                 className="navbar-link" to="/filter">Filter</NavLink></li> 
                <li><NavLink 
                style={({isActive}) =>{return {backgroundColor : isActive ? "black" : null}}}
                 className="navbar-link" to="/login">Login</NavLink></li> 
                <li><NavLink 
                style={({isActive}) =>{return {backgroundColor : isActive ? "black" : null}}}
                 className="navbar-link" to="/bootstrap-practice">bootstrap</NavLink></li>          
            </ul>
    );
}