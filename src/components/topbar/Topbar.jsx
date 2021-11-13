import './topbar.scss';
import { fetchUsers } from "../../redux/apiCalls";
import { useDispatch } from 'react-redux';
import { useRef } from "react";

export default function Topbar() {

    const search = useRef();
    const dispatch = useDispatch();

    //Storing our users in redux store
    const handleClick = (e) =>{
        e.preventDefault();
        fetchUsers(search.current.value, dispatch);
      }

    return (
        <div className="topbar">
            <form className="topbarForm" onSubmit={handleClick}>
                <input type="text" placeholder="Search..." ref={search}/>    
            </form>
            <div className="topbarInfo">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                <span>Search for Github Users</span>
            </div>
        </div>
    )
}
