import NavigationSidebar from "../NavigationSidebar";
import JobPostComponent from "../JobPostScreen/JobPostComponent";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import EditProfileComponent from "./EditProfileComponent";

const EditProfileScreen = () => {
    return (
        <div className = "container">
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                    <EditProfileComponent/>
                    <JobPostComponent/>

                </div>
                <div className="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                    <PostSummaryList title="Career Development Resources"/>
                </div>

            </div>
        </div>
    );
};

export default EditProfileScreen;
