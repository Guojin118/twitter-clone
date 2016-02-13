import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from './AppEventEmitter';

let _users = [];
const CHANGE_EVENT = "CHANGE";

class UserEventEmitter extends AppEventEmitter{
  getAll(){
    return _users;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType){
    case ActionTypes.RECEIVED_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
    break;
    default:
      break;
    //no op
  }
});


export default UserStore;
