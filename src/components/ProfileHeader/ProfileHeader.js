import React, {useEffect, useState} from "react";
import ProfileHeaderItems from "./ProfileHeaderItems";
import history from "../../utils/history";
import CONSTANTS  from "../../consts";
import {fetchCurrentProfile} from "../../a9/services/profileService";

const ProfileHeader = () => {
    const [profile, setProfile] = useState(fetchCurrentProfile);
    return (
        <ul className="list-group">
            {
                <ProfileHeaderItems profile={profile}/>
            }
        </ul>

    );
}
export default ProfileHeader;

