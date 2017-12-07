import React from 'react'
import { shallow } from 'enzyme'
import expense from '../fixtures/expenses'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should diplay Dashboard page',()=> {
  const wrapper = shallow(<ExpenseDashboardPage/>)
  expect(wrapper).toMatchSnapshot()
})