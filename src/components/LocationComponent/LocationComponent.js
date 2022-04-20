import React from "react";

const LocationComponent = () => {
    return(
        <>
            <div className="col-4">
                <h4>Job Portal Office</h4>
                <div className="row">
                        <span>
                            <i className="fas fa-map-marker-alt"></i>&nbsp;
                            JobPort Inc. 555 Madison Avenue, Suite F-2,New York 10282
                        </span>
                </div>
                <br/>
                <div className="row">
                        <span>
                            <i className="fas fa-phone-square-alt"></i>&nbsp;
                            Call Us : 0934 343 343
                        </span>
                </div>
                <br/>
                <div className="row">
                        <span>
                            <i className="fas fa-fax"></i>&nbsp;
                            Fax : 0934 343 343
                        </span>
                </div>
                <br/>
                <div className="row">
                        <span>
                            <i className="fas fa-envelope-square"></i>&nbsp;
                            Email : info@example.com
                        </span>
                </div>
                <br/>
            </div>
        </>
    );
}
export default LocationComponent;