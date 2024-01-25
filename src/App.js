import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Page404 from "./component/Page404";
import User from "./component/User";
import Contact from "./component/Contact";
import Channel from "./component/Channel";
import Company from "./component/Company";
import Other from "./component/Other";
import Login from "./component/Login";
import Bootstrap from "./component/Bootstrap";

function App(){
    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/filter" element={<Filter/>} />
                    <Route path="/user/:name" element={<User />} />
                    <Route path="/*" element={<Navigate to="/"/>} />
                    <Route path="/contact" element={<Contact/>} >
                        <Route path="company" element={<Company/>} />
                        <Route path="channel" element={<Channel/>}/>
                        <Route path="other" element={<Other/>}/>
                    </Route>
                    <Route path="/bootstrap-practice" element={<Bootstrap/>}/>

                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;