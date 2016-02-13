import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
import AppEventEmitter from './AppEventEmitter';

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends AppEventEmitter{
  getAll(){
    return _tweets.map(tweet =>{
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType){
    case (ActionTypes.RECEIVED_TWEETS):
      console.log(4,"ActionTypes.RECEIVED_TWEETS Processing");
      //acknowledge tweets
      _tweets = action.rawTweets;

      //emit a change event
      TweetStore.emitChange();
      break;
    case ActionTypes.RECEIVE_ONE_TWEET:
      _tweets.unshift(action.rawTweet);
      TweetStore.emitChange();
      break;
    default:
      break;
    //no op
  }
});


export default TweetStore;
