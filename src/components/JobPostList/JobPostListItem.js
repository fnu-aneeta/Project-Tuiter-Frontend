import React from "react";
import './jobpost-list-item.css';
import JobPostStats from "./JobPostStats";
import {deleteJobPost} from "../../a9/services/postService";


const JobPostListItem = ({jobPost}) => {
    const onDeleteJobPost = () => {
        if (jobPost && jobPost._id) {
            deleteJobPost(jobPost._id);
        }
    }
    return (
        <li className="list-group-item">
            <form>
                <table>
                    <tr>
                        <td className="align-text-top">
                            <img className="rounded-circle wd-avatar-image"
                                 src={jobPost['logo-image']}/>
                        </td>
                        <td className="ps-3" style={{width: '100%'}}>
                            <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={onDeleteJobPost}
                                    className="fa fa-times fa-pull-right">

                            </button>

                            <div className="fw-bold">
                                {jobPost.userName}
                            </div>
                            <span className="fw-bold"><a href={jobPost.url}> {jobPost.title}</a></span>
                            {jobPost.verified && <i className="ms-1 fas fa-badge-check"></i>}
                            <div className="ms-1 text-secondary">
                                <span>{jobPost && jobPost.address && jobPost.address.city}, </span>
                                <span>{jobPost && jobPost.address && jobPost.address.state} </span>
                                <span>({jobPost && jobPost.address && jobPost.address.country})</span>
                            </div>

                            <br/>
                            <div>
                                <ul className="list-group">
                                    {
                                        jobPost &&
                                        jobPost.qualifications &&
                                        jobPost.qualifications.map(qualification => <li>{qualification}</li>)
                                    }
                                </ul>
                            </div>

                            <JobPostStats stats={jobPost}/>
                        </td>
                    </tr>
                </table>
            </form>
        </li>
    );
};

export default JobPostListItem;
