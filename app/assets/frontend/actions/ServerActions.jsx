import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default{
  receivedTweets(rawTweets){
    console.log(3,"ServerActions.receivedTweets");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets //rawTweets: rawTweets
    })
  },
  receivedOneTweets(rawTweet){
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ONE_TWEET,
      rawTweet
    })
  },
  receivedUsers(rawUsers){
    console.log(13,"ServerActions.receivedUsers");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers //rawTweets: rawTweets
    })
  },
  receivedOneFollower(rawFollower){
    console.log(13,"actionType: ActionTypes.RECEIVED_ONE_FOLLOWER dispatched");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower //rawTweets: rawTweets
    })
  }
}
