import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import history from "../../utils/history";

const HomeComponent = ({
                  active = 'for you'
                  }) => {
    const searchString = React.createRef();
    const onSearch = () => {
        if (searchString.current.value) {
            history.push(`/home?search=${searchString.current.value}`);
        } else {
            history.push('/home');
        }
        history.go();

    }
    const isActive = (active, path) => `nav-link text-color ${active === path ? 'active' : ''}`
    return (
        <div>
            <div className="row mb-2">
                <div className="row">
                    <div className="col-11">
                        <input ref={searchString} className="form-control rounded-pill position-search"
                               placeholder="Search Jobs"/>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-search magnifying-glass" onClick={onSearch}/>
                    </div>
                </div>
            </div>

            <div className="card mt-2">
                <img src="https://socialmediaweek.org/wp-content/blogs.dir/1/files/twitter-campaign.jpg"
                     className="card-img-top"/>
                <div className="lr">
                    <p>Career & Marketing</p>
                </div>

            </div>
            <PostSummaryList/>
        </div>
    );
}
export default HomeComponent;
