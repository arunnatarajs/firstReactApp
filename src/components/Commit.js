import React ,{useState}from "react";
import { useParams } from "react-router";

const Commit = () =>{

    var [days,setDays] = useState();
    var [parentid,setParentid] = useState();
    var [commitedby,setCommittedby] = useState();
    var [authorname,setAuthorname] = useState();
    var [authorphoto,setAuthorphoto] = useState();

    let {owner,repository,oid} = useParams();
    
    var url = `https://api.github.com/repos/${owner}/${repository}/commits/${oid}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        var currdate = new Date();
        setDays(Math.floor((currdate-Date.parse(data.commit.committer.date))/(1000*3600*24)));
        setAuthorname(data.commit.author.name);
        setCommittedby(data.commit.committer.name);
        setParentid(data.parents[0].sha);
        setAuthorphoto(data.author.avatar_url);
    })
    

    url = `https://api.github.com/repos/${owner}/${repository}/compare/${parentid}...${oid}`;

    return(
    <div>
        <div className="left">
            <div className="left">
                <img src = {authorphoto} alt="Avatar" className="image" >
                </img>

            </div>
                
            <div className="left"><p className="header">Frame</p>
                <p><span className="muted">Authored by </span><span className="body-text">{authorname}</span></p>
            </div>
        </div>

        <div className="right">
            <p><span className="muted">Commited by </span><span className="body">{commitedby} </span><span className="muted">{days} days ago</span></p>
            <p><span className="muted">Commit </span><span className="body">{oid}</span></p>
            <p><span className="muted">Parent </span><span className="Link-monospace">{parentid}</span></p>
        </div>
    </div>
    );
}
export default Commit;