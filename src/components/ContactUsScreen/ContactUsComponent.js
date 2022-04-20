import React from "react";
import {useSelector} from "react-redux";
import ContactUsForm from "./ContactUsForm";
import LocationComponent from "../LocationComponent/LocationComponent";

const selectAllContact = (state) => state.contact;
const ContactUsComponent = () => {
    const contact = useSelector(selectAllContact);
    return(
        <>
            <div>
                <div className="row mt-2">
                    <ContactUsForm contact={contact}/>
                    <LocationComponent/>
                </div>
            </div>
        </>
    );
}
export default ContactUsComponent;