import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './user.scss'

export default function User({ name }) {

    const [user, setUser] = useState({});

    //fetching single user to get name and desc
    useEffect(()=>{
        const fetchingUsers = async() =>{
            try {
                const res = await fetch(`https://api.github.com/users/${name}`);
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchingUsers();
        
    },[name]);
    
    return (
        <>
        <Link to={`/repos/${user.login}`} style={{textDecoration: "none", color: "inherit"}}>
        <div className="user">
            <img src={user.avatar_url} alt="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            <div className="userInfo">
                <span className="userName">{user.name? user.name : "No name"}</span>
                <span className="userDesc">{user.bio? user.bio : "No desc"}</span> 
            </div>
        </div>
        </Link>
        </>
    )
}
