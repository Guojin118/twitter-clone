import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"

let mockTweets = [
  {id:1, name: 'Guojin', body: 'My #First Tweet'},
  {id:2, name: 'tt', body: 'My #Second Tweet'},
  {id:3, name: 'yy', body: 'My #Third Tweet'},
];

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetsList: mockTweets }
  }

  addTweet(tweetToAdd){
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id:Date.now(), name:"Guest", body:tweetToAdd});
    this.setState({tweetsList: newTweetsList});
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

let documentReady = ( ) => {
React.render( <Main />, document.getElementById('react') );
};

$(documentReady);
