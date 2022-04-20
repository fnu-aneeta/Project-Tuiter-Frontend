import CONSTANTS from "../../consts";

export const fetchAllWho = (dispatch) =>
    fetch(CONSTANTS.API_WHO)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch-all-who',
                who
            })
        );
