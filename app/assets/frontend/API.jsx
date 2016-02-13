import ServerActions from "./actions/ServerActions"


export default {
  getAllTweets() {
    console.log(2,"API.getAllTweets");
    $.get("/tweets")
    .success(rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => console.log(error));
  },
  createTweet(body) {
    console.log(2,"API.getAllTweets");
    $.post("/tweets", {body})
    .success(rawTweets => ServerActions.receivedOneTweets(rawTweets))
    .error(error => console.log(error));
  },
  getAllUsers() {
    console.log(2,"API.getAllUsers");
    $.get("/followers/random")
    .success(rawUsers => ServerActions.receivedUsers(rawUsers))
    .error(error => console.log(error));
  },

  followUser(userId){
    $.post("/followers", {user_id: userId})
    .success(rawFollower => ServerActions.receivedOneFollower(rawFollower))
    .error(error => console.log(error));
  }
}
