import React from 'react';
import { shallow } from 'enzyme';
import MainView from './MainView';

describe('render mainview component tests', () => {
  const props = {
    renderImages: jest.fn(),
  };

  const component = shallow(<MainView {...props} />);

  it('has one instance of main view', () => {
    expect(component).toMatchSnapshot();
  });

  it('has one <div /> with class main-view', () => {
    expect(component.find('div.main-view').length).toEqual(1);
  });
});
