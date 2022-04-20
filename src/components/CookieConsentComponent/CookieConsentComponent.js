import {Link} from "react-router-dom";
import CookieConsent from "react-cookie-consent";

const CookieConsentComponent = () => {
    return(
        <>
            {/*<CookieConsent*/}
            {/*    location="bottom"*/}
            {/*    buttonText="I Accept"*/}
            {/*    cookieName="cookieConsent"*/}
            {/*    style={{background: "#2B373B"}}*/}
            {/*    buttonStyle={{color: "#4e503b", fontSize: "13px"}}*/}
            {/*    expires={150}*/}
            {/*>*/}
                {/*This website uses cookies to enhance the user experience. By clicking "I Accept", you agree this*/}
                {/*site can store cookies on your device and disclose information in accordance with our {" "}*/}
                {/*<Link to="/privacy-policy">Privacy Policy</Link>*/}
            {/*</CookieConsent>*/}
        </>
    );
}
export default CookieConsentComponent;
