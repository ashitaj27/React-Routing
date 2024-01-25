import { useSearchParams } from "react-router-dom";

export default function Filter(){
    const[searchParam,setSearchParams] = useSearchParams();
    console.warn(searchParam.get("age"))
    console.warn(searchParam.get("city"))

    const age = searchParam.get("age")
    const city = searchParam.get("city")

    return(
        <>
            <h1>This is filter page</h1>
            <h3>My age is : {age} </h3>
            <h3>My city is : {city} </h3>

            <input type="text" onChange={(e)=>setSearchParams({city:e.target.value})} placeholder="enter city name"/>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} placeholder="set text in query param"/>
            <button onClick={()=>setSearchParams({age:40})}>set age in query params</button>
        </>
        
    );

}