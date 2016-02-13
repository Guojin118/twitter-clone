import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from './AppEventEmitter';

let _users = [];
let _followedIds = [];
const CHANGE_EVENT = "CHANGE";

class UserEventEmitter extends AppEventEmitter{
  getAll(){
    return _users.map( user=>{
      user.following = _followedIds.indexOf(user.id) >= 0;
      return user;
    });
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType){
    case ActionTypes.RECEIVED_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
    break;
    case ActionTypes.RECEIVED_ONE_FOLLOWER:
      console.log("_followedIds.push(action.rawFollower.user_id);")
      _followedIds.push(action.rawFollower.user_id);
      UserStore.emitChange();
      break;
    default:
      break;
    //no op
  }
});


export default UserStore;
