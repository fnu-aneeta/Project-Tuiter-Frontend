import React, {useState} from "react";
import {useDispatch} from "react-redux";

const ContactUsForm = (
    {
        contact = {
            fullName: "",
            email: "",
            subject: "",
            message: ""
        }
    }) => {
    const [localContact, setContact] = useState(contact);
    const updateContact = (update, type) => {
        if (type === "name") {
            setContact(prevState => ({...prevState, fullName: update}));
        } else if (type === "email") {
            setContact(prevState => ({...prevState, email: update}));
        } else if (type === "subject") {
            setContact(prevState => ({...prevState, subject: update}));
        } else if (type === "message") {
            setContact(prevState => ({...prevState, message: update}));
        }

    }
    const dispatch = useDispatch();
    const send = () => {
        dispatch({
            type: 'update-contact',
            contact: localContact
        })
    }

    return (


        <div className="col-8">
            <h4>Keep In Touch</h4>

            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Full Name</label>
                        {/*<label htmlFor="fullName">Full Name</label>*/}
                        <input onChange={(event) => updateContact(event.target.value, "name")}
                               type="text" className="form-control" id="fname"
                               value={localContact.fullName}
                               style={{
                                   width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Email</label>
                        <input onChange={(event) => updateContact(event.target.value, "email")}
                               type="email" className="form-control" id="email"
                               value={localContact.email}
                               style={{
                                   width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Subject</label>
                        <input onChange={(event) => updateContact(event.target.value, "subject")}
                               type="text" className="form-control" id="subject"
                               value={localContact.subject}
                               style={{
                                   width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Message</label>
                        <input onChange={(event) => updateContact(event.target.value, "message")}
                               type="text" className="form-control" id="message"
                               value={localContact.message}
                               style={{
                                   width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"
                               }}/>
                    </div>
                    <div className="d-grid mt-2">
                        <button onClick={send}
                                className="btn btn-primary btn-block rounded-pill">Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ContactUsForm;