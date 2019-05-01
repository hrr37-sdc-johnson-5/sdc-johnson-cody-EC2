import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="commentBlock">
        <div className="pic">
          <img src={this.props.user.profileimg} height="28" width="28"></img>
        </div>
        <div className="words comment">
          <a className="username" href="">{this.props.user.username}</a>
          {this.props.user.comment}
        </div>
      </div>
    );
  }
}

export default Comment;
