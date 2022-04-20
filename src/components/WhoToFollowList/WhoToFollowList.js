import React, {useEffect} from "react";
//import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch ,useSelector} from "react-redux";
import {fetchAllWho} from "../../a9/services/whoService";

const selectAllWho = (state) => state.who.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    const dispatch = useDispatch();
    useEffect(()=> fetchAllWho(dispatch), [])

    return(
     <ul className="list-group">
        <li className="list-group-item fw-bold follow-color col-color">
            Tech Companies
        </li>

    {
        who.map(who => {
            return(
                <WhoToFollowListItem who = {who}/>
            );
        })
    }
    </ul>
    );

}
export default WhoToFollowList;