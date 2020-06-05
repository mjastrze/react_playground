import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Search } from '../containers/Search';
import { ShowCard } from '../containers/ShowCard';
import data from '../data.json';

test('Search renders correctly', () => {
  // const component = renderer.create(<Search />);
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(data.shows.length);
});

test('Search should render correct amount of shows based on search terms', () => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = data.shows.filter((show) =>
    `${show.title} ${show.description}`
      .toUpperCase()
      .includes(searchWord.toUpperCase()),
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
