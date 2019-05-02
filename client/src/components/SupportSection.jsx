import React from 'react';
import CommentList from './CommentList.jsx';
import UserPhotoGrid from './UserPhotoGrid.jsx';

class SupportSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let endpoint = window.location.pathname.slice(8);
    // let origin = window.location.origin;
    let EC2 = 'http://ec2-54-67-59-13.us-west-1.compute.amazonaws.com:3003'
    fetch(`${EC2}/support/${endpoint}`)
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({
        users: users
      });
    });
  }

  render() {
    return (
      <div className="supportSection">
        <CommentList users={this.state.users}/>
        <UserPhotoGrid users={this.state.users}/>
      </div>
    );
  }
}

export default SupportSection;
