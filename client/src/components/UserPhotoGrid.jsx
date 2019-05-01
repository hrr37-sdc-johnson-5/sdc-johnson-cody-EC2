import React from 'react';
import UserThumbnail from './UserThumbnail.jsx';

class UserPhotoGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnails">
      {this.props.users.map(user => {
        return (
          <UserThumbnail user={user} key={user.id}/>
        )
      })}
      </div>
    );
  }
}

export default UserPhotoGrid;