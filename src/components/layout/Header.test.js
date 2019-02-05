import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('render header component tests', () => {
  const component = shallow(<Header />);

  it('has one instance of header', () => {
    expect(component).toMatchSnapshot();
  });

  it('has one <div /> with class header-title', () => {
    expect(component.find('div.header-title').length).toEqual(1);
  });

  it('has one <header /> with class app-header', () => {
    expect(component.find('header.app-header').length).toEqual(1);
  });

  it('has one <img /> with class app-logo', () => {
    expect(component.find('img.app-logo').length).toEqual(1);
  });

  it('has one <a /> with class app-link', () => {
    expect(component.find('a.app-link').length).toEqual(1);
  });
});
