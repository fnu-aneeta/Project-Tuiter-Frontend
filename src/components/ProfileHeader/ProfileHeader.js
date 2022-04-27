import React, {useEffect, useState} from "react";
import ProfileHeaderItems from "./ProfileHeaderItems";
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

