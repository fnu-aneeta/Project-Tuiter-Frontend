const TWEET_API = 'http://localhost:4000/api/tweets';
// const TWEET_API = 'https://node-on-server.herokuapp.com';

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );



export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })

        .then(response =>
        {
        fetchAllTweets(dispatch);
            // dispatch({
            //     type: 'like-tweet',
            //     response
              });







