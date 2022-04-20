import CONSTANTS, {LOCAL_STORAGE, ROLE} from "../../consts";
import history from "../../utils/history";

export const fetchCurrentProfile = (isRedirectSignIn=true) =>{
    const profileData = localStorage.getItem(LOCAL_STORAGE.KEY_PROFILE);
    const objProfileData = JSON.parse(profileData)
    if(!objProfileData && isRedirectSignIn){
        navigateToSignInPage();
    }
    return objProfileData || null;
}

export const fetchCurrentRecruiterProfile = (isRedirectSignIn=true) => {
    const objProfileData = fetchCurrentProfile(isRedirectSignIn)
    if (isProfileRoleRecruiter(objProfileData)) {
        return objProfileData
    }
    if(isRedirectSignIn) {
        navigateToSignInPage();
    }
    return null;
}

export const navigateToSignInPage = () => {
    localStorage.clear();
    history.push('/sign-in')
    history.go()
}

export const isProfileRoleRecruiter = (profile) => {
    return profile && profile.roles && profile.roles.includes(ROLE.RECRUITER)
}


export const signIn = (credentials) => {
    localStorage.clear();
    fetch(CONSTANTS.API_SIGN_IN, {
        method: 'POST',
        body: JSON.stringify(credentials),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        if (res && res.email) {
            localStorage.setItem(LOCAL_STORAGE.KEY_PROFILE, JSON.stringify(res));
            history.push("/profile");
            history.go();
        } else {
            if(res && res.message){
                alert(res.message)
                return;
            }
            navigateToSignInPage()
        }
    }).catch(e => {
        alert("Server is down")
        console.log(e);
    });
}

export const fetchProfileFromEmail = (email) => {
    fetch(`${CONSTANTS.API_PROFILE_BY_EMAIL}/${email}`, {
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        if (res && res.email) {
            localStorage.setItem(LOCAL_STORAGE.KEY_PROFILE, JSON.stringify(res));
            history.push("/profile");
            history.go();
        } else {
            console.log("No we didn't")
            if(res && res.message){
                alert(res.message)
                return;
            }
            navigateToSignInPage()
        }
    }).catch(e => {
        alert("Server is down")
        console.log(e);
    });
}

export const signOut = () =>{
    localStorage.clear();
    fetch(CONSTANTS.API_LOGOUT, {
        method: 'POST',
        credentials: 'include'
    }).then(res => {
        navigateToSignInPage()
    });
}

export const redirectSignUp = () => {
    history.push("/sign-up");
    history.go();
}



export const getCurrentProfile = (dispatch) => {
    fetch(CONSTANTS.API_PROFILE, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            response.json();
        })
        .then(profile =>
            dispatch({
                type: 'get-current-profile',
                profile
            })
        );
}

//Todo: Update below
export const findProfileById = (id) =>
    fetch(`${CONSTANTS.API_PROFILE}/${id}`)
        .then(response => {
            response.json();
        });

export const editProfile = (dispatch, updatedProfile, email) => {
    fetch(`${CONSTANTS.API_EDIT_PROFILE}/${email}`, {
        method: 'PUT',
        body: JSON.stringify(updatedProfile),
        headers: {
            'content-type': 'application/json'
        }

    })
        .then(response => {
            dispatch({
                type: 'update-profile',
                updatedProfile

            })
        });
}
