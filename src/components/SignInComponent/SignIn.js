import {useState} from "react";
import {redirectSignUp, signIn} from "../../a9/services/profileService";


const SignIn = () => {
    const [user, setUser] = useState({});

    const onSignIn = () => {
        signIn(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <input
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                type="email"
                className="form-control"/>
            <br/>
            <input
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                type="password"
                className="form-control"/>
            <br/>
            <div className="row text-center">
                <div className="col-6 d-grid">
                    <button
                        className="btn btn-primary rounded-pill"
                        onClick={onSignIn}>
                        Sign In
                    </button>
                </div>
                <div className="col-6 d-grid">
                    <button
                        className="btn btn-primary rounded-pill"
                        onClick={redirectSignUp}>
                        Sign Up
                    </button>
                </div>
            </div>
            {/*<NavigationSidebar/>*/}
        </div>
    );
};
export default SignIn;
