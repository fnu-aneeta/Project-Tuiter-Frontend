import React from "react";
import {useDispatch} from "react-redux";
import {likeTweet} from "../../a9/services/jobPostService";

const JobPostStats = (
    {
        stats
    }
) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        // dispatc({type: 'like-tweet', tweet});

        if(stats.liked === undefined || stats.liked === false) {
            stats.liked = true;
            stats.stats.likes++;
        }
        else {
            stats.liked = false;
            stats.stats.likes--;
        }


        likeTweet(dispatch, stats);
    };
    if(!stats || !stats.stats) return null;
    return (
        <div className="row mt-2">
        <div className="col">
            {/*<i className="far fa-comment me-2">*/}
            {/*</i>*/}
            {/*{stats && stats.stats && stats.stats.comments}*/}
        </div>
        <div className="col">
            {/*<i className="fas fa-retweet me-2">*/}
            {/*</i>*/}
            {/*{stats && stats.stats &&stats.stats.retweets}*/}
        </div>
        <div className="col" onClick={likeClickHandler}>
            {
                //     stats && stats.stats &&stats.liked &&
                // <i className="fas fa-heart me-2"
                //    style={{color: stats.liked ? 'red': "white"}}>
                // </i>
            }
            {
                // stats && !stats.liked &&
                // <i className="far fa-heart me-2"></i>
            }
            {/*{stats && stats.stats && stats.stats.likes}*/}
        </div>
        <div className="col">
            {/*<i className="fas fa-external-link-alt me-2">*/}
            {/*</i>*/}
        </div>
    </div>
    )
}

export default JobPostStats;
