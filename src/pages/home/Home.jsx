import './home.scss';
import Topbar from '../../components/topbar/Topbar';
import { useSelector } from 'react-redux';
import User from '../../components/user/User';

export default function Home() {

    const users = useSelector((state)=>state.users.name);

    return (
        <div className="home">
            <Topbar />
            {/* passing data to user component, where we will fetch data for every user to get name and description */}
            {users? users.map((item)=>{
            return <User key={item.id} name={item.login} />
          }): "Users not Found, Try Again!!!"}
        </div>
    )
}
