import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";
import TweetStore from "./stores/TweetStore";

import TweetActions from "./actions/TweetActions";

TweetActions.getAllTweets();

let getAppState = () => {
  console.log("tweetlist getAll called");
  return {tweetsList: TweetStore.getAll()};
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }


  componentDidMount(){
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formatedTweetList(data)))
    // .error(error => console.log(error));
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    TweetStore.removeChangeListner(this._onChange);
  }

  _onChange(){
    this.setState(getAppState());
  }

  render(){
    return(
      <div className="container">
          <TweetBox />
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
