import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"



class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetsList: [] }
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




let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode) {
    ReactDOM.render( <Main />, reactNode );
  };
}
$(documentReady);
