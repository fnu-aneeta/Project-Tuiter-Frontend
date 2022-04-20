const API_HOST = 'http://localhost:4000';
// const API_HOST = 'https://node-backend-portal.herokuapp.com';

const API_URL = `${API_HOST}/api`;
const API_SIGN_IN = `${API_HOST}/api/login`;
const API_LOGOUT = `${API_HOST}/api/logout`;
const API_WHO = `${API_HOST}/api/rand/who`;
const API_POSTS = `${API_HOST}/api/posts`;
const API_JOB_POST = `${API_HOST}/api/post`;
const API_SEARCH_POSTS = `${API_HOST}/api/search/posts`;
const API_PROFILE = `${API_HOST}/api/profile`;
const API_EDIT_PROFILE = `${API_HOST}/api/user`;
const API_PROFILE_BY_EMAIL = `${API_HOST}/api/user`;
const API_CREATE_USER = `${API_HOST}/api/register`;

const LOCAL_STORAGE = {
    KEY_PROFILE: "profile",
    KEY_POSTS: "posts"
}

const ROLE = {
    CANDIDATE: 'CANDIDATE',
    RECRUITER: 'RECRUITER'
}

module.exports = {
    API_SIGN_IN,
    API_EDIT_PROFILE,
    API_WHO,
    API_URL,
    API_POSTS,
    API_JOB_POST,
    API_PROFILE,
    API_LOGOUT,
    API_SEARCH_POSTS,
    API_PROFILE_BY_EMAIL,
    API_CREATE_USER,

    ROLE,
    LOCAL_STORAGE
};
