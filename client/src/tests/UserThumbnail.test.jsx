import React from 'react';
import UserThumbnail from '../components/UserThumbnail.jsx';
import {shallow} from 'enzyme';

test('<UserThumbnail/>', () => {
  let wrapper = shallow(<UserThumbnail user={{id: 1, username:"testUser", comment:"test", profileImageURL:"https://s3.amazonaws.com/uifaces/faces/twitter/edgarchris99/128.jpg", album: 1}}/>);

  expect(wrapper.exists()).toBe(true);
});