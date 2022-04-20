import {signOut} from "../../a9/services/profileService";

const ProfileLogout = () => {
    return (
        <div className="list-group">
            <button
                onClick={signOut}
                className="btn btn-primary rounded-pill">
                Sign Out
            </button>
        </div>
    );
}
export default ProfileLogout;

