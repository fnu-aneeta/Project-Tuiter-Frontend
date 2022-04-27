import React, {useEffect} from "react";
import PostSummaryListItem from "./PostSummaryListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../../a9/services/postService";
import {useLocation} from "react-router-dom";


const selectAllPosts = (state) => state.post.post;

const PostSummaryList = ({title}) => {
    const { search } = useLocation();
    const post = useSelector(selectAllPosts);
    const dispatch = useDispatch();
    useEffect(()=> fetchAllPosts(dispatch, search?search:""), [])
    return(
        <ul className="list-group">
            {
                title &&
                <li className="list-group-item">
                    <h5 className="fw-bolder">{title}</h5>
                </li>
            }
    {
        post.map((post, idx) => {
            return(
                <PostSummaryListItem key={idx} post = {post}/>
            );
        })
    }
        </ul>
    );

}
export default PostSummaryList;
