import React from 'react';
import CommentList from '../components/CommentList.jsx';
import { shallow } from 'enzyme';

test('<CommentList/>', () => {
  let wrapper = shallow(<CommentList users={[{id: 1, username:"testUser", comment:"test", profileImageURL:"https://s3.amazonaws.com/uifaces/faces/twitter/edgarchris99/128.jpg", album: 1}]}/>);

  expect(wrapper.exists()).toBe(true);
});