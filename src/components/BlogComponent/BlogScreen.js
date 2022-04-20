import NavigationSidebar from "../NavigationSidebar";
import BlogComponent from "./BlogComponent";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

// (function ($) {
//     $('#wd-home').append(`
const BlogScreen = () => {
    return (
      <div className = "container">
          {/*<h1>This is Home</h1>*/}
        <div className="row mt-2">
           <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
               <NavigationSidebar active="blog"/>
            </div>
            <div className="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <BlogComponent/>
             </div>
            <div className="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <PostSummaryList title="Career Development Resources"/>
            </div>

        </div>
        </div>
    );
};

export default BlogScreen;
