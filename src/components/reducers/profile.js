 const initialState = {
     profile: {}
 };

const profile = (state=initialState, action) => {
    switch(action.type) {
        case 'get-current-profile':
            return({
                profile: action.profile
            })
        case 'update-profile':
            return ({
                profile: action.profile
            })
        case 'discard-update':
            return (state);
        default:
            return(state);
    }

};

export default profile;