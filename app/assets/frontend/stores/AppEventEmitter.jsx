import { EventEmitter } from "events";
const CHANGE_EVENT = "CHANGE";

export default class AppEventEmitter extends EventEmitter{

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    console.log(100, "add listner");
    console.log(callback);
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListner(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
}
