import {Link} from "react-router-dom";
import React, {useState} from "react";
import '../HomeScreen/home.css';
import {fetchCurrentProfile, isProfileRoleRecruiter} from "../../a9/services/profileService";

const NavigationSidebar = ({active = 'home'}) => {
    const isActive = (active, path) => `list-group-item ${active === path? 'active' : ''}`
    const [profile, setProfile] = useState(()=>fetchCurrentProfile(false));

    return(

        <div>
            <div className="list-group">
                <Link className = {isActive(active, 'home')}
                 to = "/home">
                    <i className="fas fa-home"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Home</span>
                </Link>
                {
                    isProfileRoleRecruiter(profile)?
                    <Link className={isActive(active, 'explore')}
                          to="/job-post">
                        <i className="fa fa-mail-bulk"></i>&nbsp;
                        <span className="d-none d-xl-inline-block">Post A Job</span>
                    </Link>:null
                }
                {
                    profile && profile.email?
                    <Link className={isActive(active, 'candidate')}
                          to="/profile">
                        <i className="fas fa-user-alt"></i>&nbsp;
                        <span className="d-none d-xl-inline-block">Profile</span>
                    </Link>:null
                }

                <Link className={isActive(active, 'sign-in')}
                      to="/sign-in">
                    <i className="fas fa-sign-in-alt"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Sign In</span>
                </Link>
                <Link className={isActive(active, 'sign-up')}
                      to="/sign-up">
                    <i className="fas fa-user-plus"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Sign Up</span>
                </Link>
            </div>
        </div>

    );
}
export default NavigationSidebar;
