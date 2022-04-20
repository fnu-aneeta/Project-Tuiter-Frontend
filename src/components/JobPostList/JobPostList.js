import React, {useEffect, useState} from "react";
import JobPostListItem from "./JobPostListItem";
import {fetchCurrentProfileJobPosts} from "../../a9/services/postService";

const JobPostList = () => {
    const [jobPosts, setJobPosts] = useState(null);

    useEffect(() => fetchCurrentProfileJobPosts().then(items => setJobPosts(items)), [])

    if(!jobPosts) return null

    return(
        <ul className="list-group">
            {
                jobPosts.map(jobPost =>
                    <JobPostListItem jobPost={jobPost}/>
                )
            }
        </ul>
    )
};

export default JobPostList;