import EditProfileItem from "./EditProfileItem";
const ProfileList = () => {
    return(
        <ul className="list-group">
            {
                <EditProfileItem/>
            }
        </ul>
    );

}
export default ProfileList;
