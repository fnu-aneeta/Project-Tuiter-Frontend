import contactJson from './data/contact.json';

const initialState = {
    contact: contactJson
}

const contact = (state = initialState, action) => {
    switch(action.type) {
        case 'update-contact':
            return ({
                contact: action.contact
            })
            break
        default:
            return(state);
    }


};

export default contact;