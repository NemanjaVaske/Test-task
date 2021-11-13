import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './reposDetail.scss'

export default function ReposDetail() {

    const [repo, setRepo] = useState({});
    const {name , id} = useParams();

    //fetching single repo in new tab
    useEffect(()=>{
        const fetchingRepo = async() =>{
            try {
                const res = await fetch(`https://api.github.com/repos/${id}/${name}`);
                const data = await res.json();
                setRepo(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchingRepo();
    },[id,name]);

    return (
        <div className="reposDetail">
            <span className="repoName">{repo.full_name}</span>
            <span className="repoData">Stargazers: {repo.stargazers_count}</span>
            <span className="repoData">Watchers: {repo.watchers_count}</span>
            <span className="repoData">Forks: {repo.forks_count}</span>
            <span className="repoData">Licence: {repo.licence? repo.licence : "No Licence"}</span>
        </div>
    )
}
