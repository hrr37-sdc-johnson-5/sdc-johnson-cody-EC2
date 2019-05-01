import React from 'react';
import Comment from '../components/Comment.jsx';
import {shallow} from 'enzyme';

test('<Comment/>', () => {
  let wrapper =shallow(<Comment user={{id: 1, username:"testUser", comment:"test", profileImageURL:"https://s3.amazonaws.com/uifaces/faces/twitter/edgarchris99/128.jpg", album: 1}}/>);

  expect(wrapper.exists()).toBe(true);
});
