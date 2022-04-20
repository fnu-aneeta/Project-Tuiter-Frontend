import PrivacyPolicyDetails from "./PrivacyPolicyDetails";
import LocationComponent from "../LocationComponent/LocationComponent";
import React from "react";


const PrivacyPolicyComponent = () => {
    return (
        <>
            <div>
                <div className="row mt-2">
                    <PrivacyPolicyDetails/>
                    <LocationComponent/>
                </div>
            </div>
        </>
    );
}
export default PrivacyPolicyComponent;