import CONSTANTS, {
        API_CREATE_WHO,
        API_DELETE_WHO,
        API_FETCH_WHO
} from "../../consts";
import axios from "axios";

export const fetchAllWho = (dispatch) =>
    fetch(CONSTANTS.API_WHO)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch-all-who',
                who
            })
        );


export const deleteWho = (handle) =>
    axios.delete(`${API_DELETE_WHO}/${handle}`)
    .then(response => response.data);

export const createWho = (who) =>
    axios.post(`${API_CREATE_WHO}`, who)
    .then(response => response.data);

export const fetchWho = (handle) =>
    axios.get(`${API_FETCH_WHO}/${handle}`)
    .then(response => response.data);

export const fetchAllWhos = () =>
    axios.get(`${API_FETCH_WHO}`)
    .then(response => response.data);