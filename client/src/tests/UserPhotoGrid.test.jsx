import React from 'react';
import UserPhotoGrid from '../components/UserPhotoGrid.jsx';
import { shallow } from 'enzyme';

test('<UserPhotoGrid/>', () => {
  let wrapper = shallow(<UserPhotoGrid users={[{id: 1, username:"test", comment:"testing test comment", profileImageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/edgarchris99/128.jpg", album: 1}]}/>);

  expect(wrapper.exists()).toBe(true);
});