import whoJson from './data/who.json';

const initialState = {
    who: whoJson
}

const who = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-all-who':
            return ({
                who: action.who
            })
            break;

        default:
            return (state);
    }


};

export default who;
