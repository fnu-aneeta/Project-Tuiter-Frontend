import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import who from "./components/reducers/who";
import tweets from "./components/reducers/tweets";
import profile from "./components/reducers/profile";
import post from "./components/reducers/post";
import JobPostScreen from "./components/JobPostScreen/JobPostScreen";
import React from "react";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import EditProfileScreen from "./components/EditProfileScreen/EditProfileScreen";
import SignInScreen from "./components/SignInComponent/SignInScreen";
import SignupScreen from "./components/SignUpComponent/SignupScreen";

const reducer = combineReducers({tweets: tweets, who, profile, post})
const store = createStore(reducer);

function App() {

    return (

        <BrowserRouter>
            <Provider store={store}>

                <div className="container">
                    <Route path={["/", "/home"]} exact={true} component={HomeScreen}/>
                    <Route path="/job-post" exact={true} component={JobPostScreen}/>
                    <Route path="/editProfile" exact={true} component={EditProfileScreen}/>
                    <Route path="/sign-in" exact={true} component={SignInScreen}/>
                    <Route path="/profile" exact={true} component={ProfileScreen}/>
                    <Route path="/sign-up" exact={true} component={SignupScreen}/>
                </div>

            </Provider>
        </BrowserRouter>
    );
}

export default App;
