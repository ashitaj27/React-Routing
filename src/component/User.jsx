import { useParams } from "react-router-dom";

export default function User(){
    const params = useParams();
    const {name} = params
    console.warn(name);

    return(
        <>
            <h1>This is {name}'s page</h1>
        </>

    );
}