import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile, fetchCurrentProfile, fetchProfileFromEmail} from "../../a9/services/profileService";

const EditProfileItem = () => {
    const [profile, setProfile] = useState(fetchCurrentProfile);
    const [localProfile, setLocalProfile] = useState({});
    const updateProfile = (update, type) => {
        if (type==="firstName"){
            setLocalProfile(prevState => ( {...prevState, firstName: update}));
        }
        else if (type==="coverImage"){
            setLocalProfile(prevState => ( {...prevState, coverImage: update}));
        }
        else if (type==="coverImage"){
            setLocalProfile(prevState => ( {...prevState, coverImage: update}));
        }

        else if (type==="profileImage"){
            setLocalProfile(prevState => ( {...prevState, profileImage: update}));
        }
        else if(type === "lastName"){
            setLocalProfile(prevState => ( {...prevState, lastName: update}));
        }

        else if(type === "company"){
            setLocalProfile(prevState => ( {...prevState, company: update}));
        }

        // else if(type === "education"){
        //     setLocalProfile(prevState => ( {...prevState, education: update}));
        // }

        else if(type === "jobTitle"){
            setLocalProfile(prevState => ( {...prevState, jobTitle: update}));
        }

        else if(type === "website"){
            setLocalProfile(prevState => ( {...prevState, website: update}));
        }

        else if(type === "about"){
            setLocalProfile(prevState => ( {...prevState, about: update}));
        }

    }
    const dispatch = useDispatch();
    const save = async () => {
        await editProfile(dispatch, localProfile, profile.email)
        setTimeout(fetchProfileFromEmail, 2000, profile.email)
    }

    const discard = () => {
        dispatch({
            type: 'discard-update',
            // profile: localProfile
        })
    }

    return(
        <div>
            <div className="row mt-2">
                <div className="col-2">
                    <Link to="/profile">
                    <i onClick={discard}
                       className="fas fa-times"/>
                     </Link>

            </div>

                <div className="col-8">
                    <h4>Edit profile</h4>
                </div>

                <div className="col-1">
                        <button onClick={save}
                                className="rounded-pill margin-left">Save
                        </button>
                </div>

  </div>
            <div className="row">
                <img src={profile && profile.coverImage} alt="coverImage"
                     width="100%"
                     height="200"/>
            </div>
            <div>
                <img src={profile && profile.profileImage} alt="profileImage" width="100px" height="100px"
                className="rounded-circle"
                     style={{display: "inline-block",
                         position: "relative",

                    bottom: "40px",
                    left: "10px"}}/>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">First Name</label>
                        <input onChange={(event) => updateProfile(event.target.value, "firstName")}
                               type="text" className="form-control" id="firstName"
                               value={localProfile.firstName}
                               style={{width: "100%",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Last Name</label>
                        <input onChange={(event) => updateProfile(event.target.value, "lastName")}
                               type="text" className="form-control" id="lastName"
                               value={localProfile.lastName}
                               style={{width: "100%",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                                   }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Job Title</label>
                        <input onChange={(event) => updateProfile(event.target.value, "jobTitle")}
                               type="text" className="form-control" id="jobTitle"
                               value={localProfile.jobTitle}
                               style={{width: "100%",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Company</label>
                        <input onChange={(event) => updateProfile(event.target.value, "company")}
                               type="text" className="form-control" id="company"
                               value={localProfile.company}
                               style={{width: "100%",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="formGroupExampleInput">Education</label>*/}
                    {/*    <input onChange={(event) => updateProfile(event.target.value, "education")}*/}
                    {/*           type="text" className="form-control" id="education"*/}
                    {/*           value={localProfile.education}*/}
                    {/*           style={{width: "100%",*/}
                    {/*               padding: "10px",*/}
                    {/*               paddingTop: "15px",*/}
                    {/*               background: "none",*/}
                    {/*               border: "1px solid"}}/>*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Website</label>
                        <input onChange={(event) => updateProfile(event.target.value, "website")}
                               type="text" className="form-control" id="website"
                               value={localProfile.website}
                               style={{width: "100%",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="formGroupExampleInput">About</label>
                        <input onChange={(event) => updateProfile(event.target.value, "about")}
                               type="text" className="form-control" id="about"
                               value={localProfile.about}
                               style={{width: "100%",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>
                </form>
            </div>
</div>
    )
}

export default EditProfileItem;
