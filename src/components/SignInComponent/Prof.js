import { useHistory } from "react-router-dom";
// import Navigation from "../Nagivation";
import NavigationSidebar from "../NavigationSidebar";
import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
// const USER_API = 'http://localhost:4000/api/profile';


const Prof = () => {
    const [user, setUser] = useState({});
    const navigate = useHistory();
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(e => navigate('/sign-in'));
    }
    const logout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => navigate('/home'));
    }
    useEffect(getProfile, [navigate]);
    return(
        <div>
            <h1>Profile</h1>
            <input
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                className="form-control"/>
            <button
                onClick={logout}
                className="btn btn-danger">
                Logout
            </button>
            <NavigationSidebar/>
        </div>
    );
};
export default Prof;