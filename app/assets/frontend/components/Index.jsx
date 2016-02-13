import React from 'react';

import ReactDOM from 'react-dom';
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";
import TweetStore from "../stores/TweetStore";
import TweetActions from "../actions/TweetActions";
import { Link } from 'react-router';



let getAppState = () => {
  console.log("tweetlist getAll called");
  return {tweetsList: TweetStore.getAll()};
}

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }


  componentDidMount(){
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formatedTweetList(data)))
    // .error(error => console.log(error));
    TweetActions.getAllTweets();
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
          <Link to='/follow' >Who to follow</Link>
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
