import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"



class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetsList: [] }
  }

  formatedTweetList(tweetsList){
    let formatedList = tweetsList.map(tweet =>{
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
    return {
      tweetsList: formatedList
    };
  }

  addTweet(tweetToAdd){
    // $.post("/tweets", {body: tweetToAdd})
    // .success( savedTweet =>
    //   console.log(savedTweet)
    // )
    // .eroror(erorr => console.log(error));

    $.post("/tweets", {body: tweetToAdd})
    .success(bsavedTweet => {
      console.log(bsavedTweet);
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(bsavedTweet);
      this.setState(this.formatedTweetList(newTweetsList));
    })
    .error(error => console.log(error));
  }

  componentDidMount(){
    $.ajax("/tweets")
    .success(data => this.setState(this.formatedTweetList(data)))
    .error(error => console.log(error));
  }

  render(){
    return(
      <div className="container">
          <TweetBox sendTweet={this.addTweet.bind(this)} />
          <TweetList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

// var ProductCategoryRow = React.createClass({
//     render: function() {
//         return (<tr><th colSpan="2">{this.props.category}</th></tr>);
//     }
// });




let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode) {
    ReactDOM.render( <Main />, reactNode );
  };
}
$(documentReady);
