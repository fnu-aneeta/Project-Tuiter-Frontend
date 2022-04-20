import NavigationSidebar from "../NavigationSidebar";
import ContactUsComponent from "./ContactUsComponent";
import React from "react";

const ContactUsScreen = () => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="contact"/>
                </div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-9 col-xl-9 col-xxl-9">
                    <ContactUsComponent/>
                </div>
            </div>
        </div>
    );
};

export default ContactUsScreen;
