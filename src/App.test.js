import React from 'react';
import { shallow } from 'enzyme';
import App from './components/App';
import Header from './components/layout/Header';
import MainView from './components/views/MainView';

describe('<App />', () => {
  const component = shallow(<App />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('has one <Header />', () => {
    expect(component.find(Header).length).toBe(1);
  });

  it('has one <MainView />', () => {
    expect(component.find(MainView).length).toBe(1);
  });
});
