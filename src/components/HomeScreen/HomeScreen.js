import NavigationSidebar from "../NavigationSidebar";
import HomeComponent from "./HomeComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

const HomeScreen = () => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-3 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-5 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6" style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
                <div className="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                    <WhoToFollowList/>
                </div>

            </div>
        </div>
    );
};

export default HomeScreen;

