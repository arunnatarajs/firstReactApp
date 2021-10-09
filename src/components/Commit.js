import React ,{useState}from "react";
import { useParams } from "react-router";

const Commit = () =>{

    var [oid,setOid] = useState();
    var [parentid,setParentid] = useState();
    var [commitedby,setCommittedby] = useState();
    var [authorname,setAuthorname] = useState();

    let {owner,repository} = useParams();
    
    var url = `https://api.github.com/repos/${owner}/${repository}/commits/01484c7931c70226b09d9474a805ee7cfb71af79`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        var currdate = new Date();
        currdate = Math.floor((currdate-Date.parse(data.commit.committer.date))/(1000*3600*24))
        console.log(currdate);
        setAuthorname(data.commit.author.name);
        setCommittedby(data.commit.committer.name);
        setOid(data.sha);
        setParentid(data.parents[0].sha);
    })
    

    return(
        <div>
            <div>
                <p><span>Authored by </span><span>{authorname}</span></p>
            </div>
        <div className="upperleft">
            <p><span class="muted">Commited by </span><span>{commitedby}</span></p>
            <p><span class="muted">Commit </span><span class="body">{oid}</span></p>
            <p><span class="muted">Parent </span><span class="Link-monospace">{parentid}</span></p>
        </div>
        </div>
    );
}
export default Commit;