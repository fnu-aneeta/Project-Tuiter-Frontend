import React, {useState} from "react";
import {postJob} from "../../a9/services/postService";


const CreateJobPostComponent = () => {
    const [jobPostDetails, setJobPostDetails] = useState({
        city: '',
        state: '',
        salary: {
            format: '',
            min: '$126K/yr',
            max: '$176K/yr'
        },
        qualifications: '',
        responsibilities: '',
        title: '',
        skills: '',
        description: ''
    });

    const onPostJob = () => {


        let qualifications;
        if(jobPostDetails.qualifications){
            qualifications = jobPostDetails.qualifications.split("\n").map((qualification=>qualification));
        }
        let responsibilities;
        if(jobPostDetails.responsibilities){
            responsibilities = jobPostDetails.responsibilities.split("\n").map((responsibilitie=>responsibilitie));
        }
        let skills;
        if(jobPostDetails.skills){
            skills = jobPostDetails.skills.split(",").map((skill) => {
                return {name: skill.trim(), url: ''}
            })
        }

        console.log("jobPostDetails")
        console.log(jobPostDetails)
        console.log("Responsibilities")
        console.log(jobPostDetails.responsibilities)
        console.log("skills")
        console.log(jobPostDetails.skills)
        console.log("title")
        console.log(jobPostDetails.title)
        const jobDetails = {
            address: {
                city: jobPostDetails.city,
                state: jobPostDetails.state,
                country: 'USA',
            },
            salary: jobPostDetails.salary,
            qualifications: qualifications,
            responsibilities: responsibilities,
            title: jobPostDetails.title,
            skills: skills,
            description: jobPostDetails.description
        }
        postJob(jobDetails)
    }
    return (
        <>
            <form>
                <table style={{marginBottom: '16px', width: '100%'}}>
                    <tr>
                        <td>
                            <input value={jobPostDetails.title}
                                   onChange={(event) => setJobPostDetails({
                                       ...jobPostDetails,
                                       title: event.target.value
                                   })} className="form-control" placeholder="Title">
                            </input>

                            <br/>
                            <input value={jobPostDetails.description}
                                   onChange={(event) => setJobPostDetails({
                                       ...jobPostDetails,
                                       description: event.target.value
                                   })} className="form-control" placeholder="Description">
                            </input>

                            <br/>
                            <input value={jobPostDetails.skills}
                                   onChange={(event) => setJobPostDetails({
                                       ...jobPostDetails,
                                       skills: event.target.value
                                   })} className="form-control" placeholder="Skills (comma seperated java, c++, etc.)">
                            </input>

                            <br/>
                            <textarea value={jobPostDetails.responsibilities}
                                      onChange={(event) => setJobPostDetails({
                                          ...jobPostDetails,
                                          responsibilities: event.target.value
                                      })} className="form-control" placeholder="Responsibilities (new line seperated.)">
                            </textarea>

                            <br/>
                            <textarea value={jobPostDetails.qualifications}
                                      onChange={(event) => setJobPostDetails({
                                          ...jobPostDetails,
                                          qualifications: event.target.value
                                      })} className="form-control" placeholder="Qualifications (new line seperated.)">
                            </textarea>
                            <br/>
                            <input value={jobPostDetails.city}
                                   onChange={(event) => setJobPostDetails({
                                       ...jobPostDetails,
                                       city: event.target.value
                                   })} className="form-control" placeholder="City">
                            </input>
                            <br/>
                            <input value={jobPostDetails.state}
                                   onChange={(event) => setJobPostDetails({
                                           ...jobPostDetails,
                                           state: event.target.value
                                       })} className="form-control" placeholder="State">
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <hr/>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={onPostJob} className="btn btn-primary fa-pull-right rounded-pill">
                                Post
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default CreateJobPostComponent;