import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
import { EventEmitter } from "events";


let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter{
  getAll(){
    return _tweets.map(tweet =>{
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }
  
  emitChange(){
    this.emit("CHANGE");
  }

  addChangeListener(callback){
    console.log(100, "add listner");
    console.log(callback);
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListner(){
    this.removeListener(CHANGE_EVENT, callback);
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

    default:
      break;
    //no op
  }
});


export default TweetStore;
