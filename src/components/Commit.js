import React ,{useState}from "react";
import { useParams } from "react-router";

const Commit = () =>{

    var [oid,setOid] = useState();
    var [days,setDays] = useState();
    var [parentid,setParentid] = useState();
    var [commitedby,setCommittedby] = useState();
    var [authorname,setAuthorname] = useState();

    let {owner,repository} = useParams();
    
    var url = `https://api.github.com/repos/${owner}/${repository}/commits/01484c7931c70226b09d9474a805ee7cfb71af79`;
    var url = `https://api.github.com/repos/timmywheels/agile-week/commits/35b2a34e2ce8599da7245c6c0c8eb04de5044e11`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        var currdate = new Date();
        setDays(Math.floor((currdate-Date.parse(data.commit.committer.date))/(1000*3600*24)));
        setAuthorname(data.commit.author.name);
        setCommittedby(data.commit.committer.name);
        setOid(data.sha);
        setParentid(data.parents[0].sha);
    })
    

    return(
    <div clas="float-container">
        <div class="left">
            <div class="left">
                <img src="https://avatars.githubusercontent.com/u/91341545?v=4" alt="Avatar" class="image" >
                </img>

            </div>
                
            <div class="left"><p class="header">Frame</p>
                <p><span class="muted">Authored by </span><span class="body-text">{authorname}</span></p>
            </div>
        </div>

        <div class="right">
            <p><span class="muted">Commited by </span><span class="body">{commitedby} </span><span class="muted">{days} days ago</span></p>
            <p><span class="muted">Commit </span><span class="body">{oid}</span></p>
            <p><span class="muted">Parent </span><span class="Link-monospace">{parentid}</span></p>
        </div>

    </div>
    );
}
export default Commit;