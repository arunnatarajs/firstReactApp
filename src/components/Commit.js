import React from "react";
import { useParams } from "react-router";

const Commit = () =>{
    let {owner,repository} = useParams();
    
    var url = `https://api.github.com/repos/${owner}/${repository}/commits`;
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    
    return(
        <div>
            <h1>{owner}</h1>
            <h2>{repository}</h2>
        </div>
    );
}
export default Commit;