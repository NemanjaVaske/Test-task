import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Repo from '../repo/Repo';
import './repos.scss';

export default function Repos() {

    const [repos, setRepos] = useState([]);
    const [empty, setEmpty] = useState(false);

    const params = useParams().id;

    //fetching all repos
    useEffect(()=>{
        const fetchingRepos = async() =>{
            try {
                const res = await fetch(`https://api.github.com/users/${params}/repos`);
                const data = await res.json();
                if(data.length<1){
                    setEmpty(true);
                }
                else{
                    setRepos(data);
                    setEmpty(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchingRepos();
    },[params]);
    
    return (
        <div className="repos">
            <Link className="backButton" to="/">Back To Search</Link>
            <div className="reposCard">
            {!empty ? repos.map((repo)=>{
                return <Repo key={repo.id} params={params} name={repo.name} desc={repo.description} date={repo.created_at} />
            }) : "User doesn't have repos !!!"}
            </div>
            
        </div>
    )
}
