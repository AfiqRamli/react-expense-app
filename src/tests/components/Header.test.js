import React from 'react'
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'

test('shouldrender Header correctly', () => {
  const wrapper = shallow(<Header/>)
  expect(wrapper).toMatchSnapshot()
})