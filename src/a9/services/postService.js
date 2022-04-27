import CONSTANTS, {
    API_CREATE_USER,
    LOCAL_STORAGE,
    API_PROFILE_BY_EMAIL,
    API_JOB_POST,
    API_POSTS,
    API_DELETE_USER, API_ALL_USERS
} from "../../consts";
import {fetchCurrentProfile, fetchCurrentRecruiterProfile, isProfileRoleRecruiter} from "./profileService";
import axios from "axios";

export const fetchCurrentProfileJobPostsLocalStorage = () =>{
    const jobPosts = localStorage.getItem(LOCAL_STORAGE.KEY_POSTS);
    const objJobPosts = JSON.parse(jobPosts)
    return objJobPosts || null;
}

export const postJob = (jobPostDetails) => {
    const profile = fetchCurrentRecruiterProfile()
    const jobPost = {
        userName: profile.firstName + " " + profile.lastName,
        companyName: profile.company,
        email: profile.email,
        isJobPost: true,

        address: jobPostDetails.address,
        salary: jobPostDetails.salary,
        qualifications: jobPostDetails.qualifications,
        responsibilities: jobPostDetails.responsibilities,
        title: jobPostDetails.title,
        skills: jobPostDetails.skills,
        description: jobPostDetails.description
    }
    fetch(CONSTANTS.API_JOB_POST, {
        method: 'POST',
        body: JSON.stringify(jobPost),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch(e => {
            //alert("Server is down!!")
            console.log(e)
        })
}

export const fetchCurrentProfileJobPosts = () => {
    const profile = fetchCurrentProfile();

    return fetch(`${CONSTANTS.API_POSTS}/${profile.email}`, {
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(posts => {
            return posts
        })
}
export const createJob = (jobPost) =>
    axios.post(`${API_JOB_POST}`, jobPost)
        .then(response => response.data);

export const deletePost = (jobId) =>
    axios.delete(`${API_JOB_POST}/${jobId}`)
        .then(response => response.data);

export const fetchAllJobPost = () =>
    axios.get(`${API_POSTS}`)
        .then(response => response.data);

export const fetchAllPosts = (dispatch, queryString) => {
    fetch(`${CONSTANTS.API_SEARCH_POSTS}/${queryString}`)
        .then(response => response.json())
        .then(post =>
            dispatch({
                type: 'fetch-all-posts',
                post
            })
        );
}

export const deleteJobPost = (jobId) =>{
    fetch(`${CONSTANTS.API_JOB_POST}/${jobId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch(e => {
            console.log(e)
        })
}

