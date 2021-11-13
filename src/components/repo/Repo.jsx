import './repo.scss';
import { Link } from 'react-router-dom';

export default function Repo({ params, name, desc, date }) {



    return (
        //clicking on repo open it in new tab
        <Link to={`/reposDetails/${params}/${name}`} target="_blank" className="repo" style={{textDecoration: "none", color: "inherit"}} >
            <span className="repoName">{name}</span>
            <span className="repoDesc">{desc? desc : "No description"}</span>
            <span className="repoDate"><b>Created at:</b>  {date}</span>
            <span className="repoButton">Open in new tab</span>
        </Link>
    )
}
